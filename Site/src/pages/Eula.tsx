import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "../styles/Eula.module.css"

const Eula = () => {
  const navigate = useNavigate()

  const [accepted, setAccepted] = useState(false)

  const cancel = () => {
    navigate("/purchase")
  }

  const confirm = () => {
    if (!accepted) return

    navigate("/purchase", {
      state: {
        eulaAccepted: true,
      },
    })
  }

  return (
    <main className={styles.eulaPage}>
      <section
        className={styles.eulaDialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="eula-title"
      >
        <h1 id="eula-title">
          End User License Agreement
        </h1>

        <div className={styles.eulaText}>
          {/* =====================================================
              REPLACE THIS WITH YOUR ACTUAL EULA
             ===================================================== */}

          <h2>1. License</h2>

          <p>
            YOUR EULA TEXT GOES HERE.
          </p>

          <p>
            This is where the complete End User License Agreement
            will be displayed.
          </p>

          <h2>2. Restrictions</h2>

          <p>
            Add your license restrictions and other terms here.
          </p>

          <h2>3. Acceptance</h2>

          <p>
            Add your applicable acceptance terms here.
          </p>

          {/* =====================================================
              END EULA
             ===================================================== */}
        </div>

        <label className={styles.eulaAgreement}>
          <input
            type="checkbox"
            checked={accepted}
            onChange={(event) =>
              setAccepted(event.target.checked)
            }
          />

          <span>
            I have read and agree to the End User License Agreement.
          </span>
        </label>

        <div className={styles.eulaActions}>
          <button
            type="button"
            className={styles.eulaCancel}
            onClick={cancel}
          >
            Cancel
          </button>

          <button
            type="button"
            className={styles.eulaContinue}
            disabled={!accepted}
            onClick={confirm}
          >
            Continue
          </button>
        </div>
      </section>
    </main>
  )
}

export default Eula
