import styles from '../styles/terms.module.css';

export default function Terms() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Terms of Service</h1>
      </div>

      <div className={styles.content}>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By using WorkMate, you agree to these Terms of Service and our Privacy Policy. 
          If you do not agree, you must stop using the service.
        </p>

        <h2>2. Use of the Service</h2>
        <p>
          You may use WorkMate only for lawful purposes. You may not:
        </p>
        <ul>
          <li>Reverse engineer or copy the software.</li>
          <li>Use the service to infringe on others' rights.</li>
          <li>Distribute malware or attempt to disrupt the service.</li>
        </ul>

        <h2>3. Account Responsibility</h2>
        <p>
          If your account requires login, you are responsible for maintaining the security of your account 
          and all activities that occur under your account.
        </p>

        <h2>4. License</h2>
        <p>
          WorkMate grants you a non-exclusive, non-transferable license to use the software as intended. 
          You may not resell or redistribute the software.
        </p>

        <h2>5. Fees and Payment</h2>
        <p>
          Some features may require payment. All fees are outlined during purchase. 
          Payments are non-refundable unless otherwise stated.
        </p>

        <h2>6. Termination</h2>
        <p>
          We may suspend or terminate your access at any time if you violate these Terms or engage in prohibited behavior.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          WorkMate is provided “as is.” We are not liable for any indirect, incidental, or consequential damages, 
          including loss of data or productivity.
        </p>

        <h2>8. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. Your continued use of WorkMate constitutes acceptance of the updated terms.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the United States. Any disputes will be resolved in applicable courts within your jurisdiction.
        </p>

        <h2>10. Contact</h2>
        <p>
          For questions about these Terms, contact us at: <br/>
          <a href="mailto:support@server.com" className={styles.rightColumn}>
            support@server.com
          </a>
        </p>
      </div>
    </div>
  )
}