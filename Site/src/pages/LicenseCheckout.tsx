// src/components/LicenseCheckout.tsx

import { useState } from "react";

interface Props {
  onBack?: () => void;
}

export default function LicenseCheckout({ onBack }: Props) {
    console.log("?????");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleBuy(): Promise<void> {
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("http://localhost:3000/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data: { url?: string; error?: string } = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");

      window.location.href = data.url!;
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <div style={styles.box}>
      {onBack && (
        <button style={styles.back} onClick={onBack}>
          ← Back
        </button>
      )}
      <h2 style={styles.heading}>Get your license</h2>
      <p style={styles.para}>Purchase once, get your serial key instantly by email.</p>

      <button
        style={styles.button}
        onClick={() => {
            console.log("button clicked");  // ← add this
            handleBuy();
        }}
        disabled={status === "loading"}
        >
        {status === "loading" ? "Redirecting to Stripe..." : "Buy Now"}
      </button>

      {status === "error" && (
        <p style={{ color: "#f87171", fontSize: "0.875rem", marginTop: "8px" }}>
          {message}
        </p>
      )}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  box: {
    maxWidth: "480px",
    margin: "0 auto",
    padding: "2rem",
    borderRadius: "12px",
    background: "#1a1a1a",
    color: "#fff",
  },
  back: {
    background: "none",
    border: "none",
    color: "#aaa",
    cursor: "pointer",
    fontSize: "0.875rem",
    marginBottom: "1rem",
    padding: 0,
  },
  heading: { margin: "0 0 8px", fontSize: "1.5rem" },
  para: { margin: "0 0 20px", color: "#aaa", fontSize: "0.95rem" },
  button: {
    padding: "12px 28px",
    borderRadius: "8px",
    border: "none",
    background: "#6366f1",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
    fontSize: "1rem",
  },
};
