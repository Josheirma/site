import { useState } from "react"
import { PayPalButtons } from "@paypal/react-paypal-js"
import { useLocation, useNavigate } from "react-router-dom"
import styles from "../styles/Purchase.module.css"

const API = import.meta.env.VITE_PUBLIC_API_URL

const Purchase = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  /*
   * EULA acceptance is passed back from /eula.
   *
   * Nothing is saved to the server yet.
   */
  const eulaAccepted =
    location.state?.eulaAccepted === true

  const openEula = () => {
    setErrorMsg(null)

    navigate("/eula")
  }

  return (
    <div style={{ padding: "3rem" }}>
      <h2>Purchase</h2>

      <div className={styles.text}>
        <div className={styles.gap}>
          <p>Buy this product for $59.99</p>
        </div>

        <div className={styles.paragraph}>
          After your purchase completes, your license key will appear
          on this page and be emailed to you. If you're disconnected
          before the page fully loads, don't worry — your key will still
          be sent to your email shortly.
        </div>
      </div>

      {errorMsg && (
        <p
          style={{
            color: "#f87171",
            marginBottom: "1rem",
            fontSize: "0.9rem",
          }}
        >
          {errorMsg}
        </p>
      )}

      {!eulaAccepted ? (

        /*
         * First click takes the customer to the EULA.
         * PayPal is NOT contacted here.
         */
        <button
          type="button"
          className={styles.paypalStartButton}
          onClick={openEula}
        >
          PayPal
        </button>

      ) : (

        /*
         * PayPal buttons only exist after the EULA
         * has been accepted.
         */
        <PayPalButtons
          style={{ layout: "vertical" }}

          createOrder={() => {
            setErrorMsg(null)

            return fetch(`${API}/api/paypal/create-order`, {
              method: "POST",
            })
              .then(async (res) => {
                if (res.status === 429) {
                  throw new Error(
                    "Too many requests — please wait a moment and try again."
                  )
                }

                if (!res.ok) {
                  throw new Error(
                    "Could not start checkout. Please try again."
                  )
                }

                return res.json()
              })
              .then((data) => data.id)
          }}

          onApprove={(data) => {
            return fetch(`${API}/api/paypal/capture-order`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                orderID: data.orderID,
              }),
            })
              .then(async (res) => {
                if (res.status === 429) {
                  throw new Error(
                    "Too many requests — please wait a moment and try again."
                  )
                }

                if (res.status === 409) {
                  throw new Error(
                    "Payment is already being processed — please wait."
                  )
                }

                if (!res.ok) {
                  throw new Error(
                    "Payment received but something went wrong. Please contact support."
                  )
                }

                return res.json()
              })
              .then((details) => {
                if (details.error) {
                  throw new Error(details.error)
                }

                navigate("/success", {
                  state: {
                    serial: details.serial ?? null,
                  },
                })
              })
          }}

          onError={(err) => {
            console.error("PayPal error:", err)

            setErrorMsg(
              "Something went wrong with the payment. Please try again or contact support."
            )
          }}

          onCancel={() => {
            setErrorMsg(
              "Payment cancelled — your card has not been charged."
            )
          }}
        />
      )}
    </div>
  )
}

export default Purchase

