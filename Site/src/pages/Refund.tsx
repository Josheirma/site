import styles from '../styles/refund.module.css'

export default function Refund() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Refund Policy</h1>
      </div>

      <div className={styles.content}>
        <h2>1. Overview</h2>
        <p>
          At Simplistics Inc., we strive to provide a high-quality experience with WorkMate.
          This Refund Policy outlines the conditions under which refunds may be granted.
        </p>

        <h2>2. Eligibility for Refunds</h2>
        <p>You may be eligible for a refund if:</p>
        <ul>
          <li>You experience a technical issue that prevents the software from functioning as intended.</li>
          <li>You contact us within a reasonable time after purchase.</li>
          <li>The issue cannot be resolved by our support team.</li>
        </ul>

        <h2>3. Non-Refundable Situations</h2>
        <p>Refunds will generally not be provided in the following cases:</p>
        <ul>
          <li>Change of mind after purchase.</li>
          <li>Failure to use the software.</li>
          <li>Minor bugs or issues that do not significantly affect functionality.</li>
        </ul>

        <h2>4. Requesting a Refund</h2>
        <p>
          To request a refund, please contact our support team with your purchase details
          and a description of the issue.
        </p>
        <p>
          Email:{" "}
          <a href="mailto:support@server.com" className={styles.rightColumn}>
            support@server.com
          </a>
        </p>

        <h2>5. Processing Refunds</h2>
        <p>
          Approved refunds will be processed through the original payment method.
          Processing times may vary depending on your payment provider.
        </p>

        <h2>6. Changes to This Policy</h2>
        <p>
          We may update this Refund Policy from time to time. Any changes will be posted
          on this page with an updated effective date.
        </p>

        <h2>7. Contact</h2>
        <p>
          If you have any questions about this Refund Policy, please contact us at:
        </p>
        <p>
          <a href="mailto:support@server.com" className={styles.rightColumn}>
            support@server.com
          </a>
        </p>
      </div>
    </div>
  )
}