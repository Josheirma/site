import { useState } from "react"
import styles from "../styles/download_page.module.css"

const API = import.meta.env.VITE_PUBLIC_API_URL

export default function Download_Page() {
  const [serial,  setSerial]  = useState("")
  const [status,  setStatus]  = useState<"idle" | "loading" | "error" | "success">("idle")
  const [message, setMessage] = useState("")

  const handleDownload = async () => {
    const trimmed = serial.trim().toUpperCase()
    if (!/^WM-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{4}$/.test(trimmed)) {
      setStatus("error")
      setMessage("Please enter a valid license key (format: WM-XXXX-XXXX-XXXX).")
      return
    }

    setStatus("loading")
    setMessage("")

    try {
      // Exchange activated serial for a short-lived single-use download token
      const tokenRes = await fetch(`${API}/api/download-token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serial: trimmed }),
      })

      if (!tokenRes.ok) {
        const err = await tokenRes.json().catch(() => ({}))
        throw new Error(err.error || "License verification failed.")
      }

      const { token } = await tokenRes.json()

      // Trigger the gated download
      const link = document.createElement("a")
      link.href = `${API}/api/download/myapp.exe?token=${encodeURIComponent(token)}`
      link.download = "WorkMate_v1.0.0.exe"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      setStatus("success")
      setMessage("Your download is starting…")
      setTimeout(() => setStatus("idle"), 5000)
    } catch (err: any) {
      setStatus("error")
      setMessage(err.message || "Something went wrong. Please try again.")
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Download WorkMate</h1>

        <div className={styles.content}>
          <h2>Version</h2>
          <p>v1.0.0 (Expected: June 2026)</p>

          <h2>System Requirements</h2>
          <ul>
            <li>Windows 10 or 11</li>
            <li>4GB RAM minimum</li>
            <li>100MB available storage</li>
          </ul>

          <h2>Installation</h2>
          <ul>
            <li>Open the downloaded file (.exe)</li>
            <li>Follow the installation steps</li>
            <li>Launch WorkMate after installation</li>
          </ul>

          <h2>License</h2>
          <p>Enter your license key below to download the installer.</p>

          <div style={{ marginTop: "1.5rem" }}>
            <input
              type="text"
              placeholder="WM-XXXX-XXXX-XXXX"
              value={serial}
              onChange={(e) => setSerial(e.target.value)}
              maxLength={20}
              style={{
                fontFamily: "monospace",
                fontSize: "1rem",
                padding: "8px 12px",
                borderRadius: "6px",
                border: "1px solid #444",
                background: "#1a1a1a",
                color: "#fff",
                width: "100%",
                marginBottom: "0.75rem",
                boxSizing: "border-box",
              }}
            />
            <button
              onClick={handleDownload}
              disabled={status === "loading"}
              style={{ width: "100%" }}
            >
              {status === "loading" ? "Verifying…" : "⬇ Download WorkMate v1.0.0"}
            </button>

            {status === "error" && (
              <p style={{ color: "#f87171", marginTop: "0.5rem", fontSize: "0.9rem" }}>{message}</p>
            )}
            {status === "success" && (
              <p style={{ color: "#4ade80", marginTop: "0.5rem", fontSize: "0.9rem" }}>{message}</p>
            )}
          </div>

          <h2 style={{ marginTop: "2rem" }}>Need Help?</h2>
          <p>
            Contact support:<br />
            <a href="mailto:support@server.com" className={styles.rightColumn}>
              support@server.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
