import { useEffect, useState } from "react";
import styles from '../styles/Purchase.module.css';

export default function Purchase() {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(): Promise<void> {
    setStatus("loading");
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
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  // 👇 auto-run when component loads
  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div className={styles.emailBox}>
      <h2 className={styles.emailHeading}>Redirecting to checkout...</h2>

      {status === "loading" && (
        <p className={styles.emailPara}>Please wait...</p>
      )}

      {status === "error" && (
        <>
          <p style={{ color: "#f87171", fontSize: "0.875rem" }}>
            {message}
          </p>

          {/* optional retry */}
          <button
            className={styles.emailButton}
            onClick={handleSubmit}
          >
            Try Again
          </button>
        </>
      )}
    </div>
  );
}