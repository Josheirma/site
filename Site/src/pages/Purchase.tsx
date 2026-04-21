import { useState } from "react"
import { PayPalButtons } from "@paypal/react-paypal-js"
import { useNavigate } from "react-router-dom"

// Set VITE_PUBLIC_API_URL=http://localhost:3000 in .env.local (already present)
// Set VITE_PUBLIC_API_URL=https://api.yourdomain.com for production
const API = import.meta.env.VITE_PUBLIC_API_URL

const Purchase = () => {
  const navigate = useNavigate()
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Purchase</h2>
      <p>Buy this product for $59.99</p>
      <p>
        Upon completing your purchase, your license key will be displayed on
        screen and sent to your email. If you are disconnected before this page
        fully loads, your key will be delivered to your email as soon as
        possible.
      </p>

      {errorMsg && (
        <p style={{ color: "#f87171", marginBottom: "1rem", fontSize: "0.9rem" }}>
          {errorMsg}
        </p>
      )}

      <PayPalButtons
        style={{ layout: "vertical" }}

        createOrder={() => {
          setErrorMsg(null)
          return fetch(`${API}/api/paypal/create-order`, { method: "POST" })
            .then(async (res) => {
              if (res.status === 429) throw new Error("Too many requests — please wait a moment and try again.")
              if (!res.ok)           throw new Error("Could not start checkout. Please try again.")
              return res.json()
            })
            .then((data) => data.id)
        }}

        onApprove={(data) => {
          return fetch(`${API}/api/paypal/capture-order`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ orderID: data.orderID }),
          })
            .then(async (res) => {
              if (res.status === 429) throw new Error("Too many requests — please wait a moment and try again.")
              if (res.status === 409) throw new Error("Payment is already being processed — please wait.")
              if (!res.ok)           throw new Error("Payment received but something went wrong. Please contact support.")
              return res.json()
            })
            .then((details) => {
              if (details.error) throw new Error(details.error)
             navigate("/success", { state: { serial: details.serial ?? null } })
            })
        }}

        onError={(err) => {
          console.error("PayPal error:", err)
          setErrorMsg("Something went wrong with the payment. Please try again or contact support.")
        }}

        onCancel={() => {
          setErrorMsg("Payment cancelled — your card has not been charged.")
        }}
      />
    </div>
  )
}

export default Purchase
