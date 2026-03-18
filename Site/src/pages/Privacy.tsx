import styles from '../styles/privacy.module.css'

export default function Privacy() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Privacy Policy</h1>
      </div>

      <div className={styles.content}>
        <p>
          Simplistics Inc. ("we", "our") respects your privacy. This Privacy Policy explains how
          WorkMate collects, uses, and protects your information when you use our software.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We only collect the information necessary to provide our service, including:</p>
        <ul>
          <li>Email addresses for licensing and support purposes.</li>
          <li>Payment information through secure third-party processors (Stripe, PayPal).</li>
          <li>Technical data, such as crash reports or device information, to improve the software.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>Provide and maintain the software.</li>
          <li>Process payments and licenses.</li>
          <li>Respond to support requests and inquiries.</li>
          <li>Improve software functionality and fix bugs.</li>
        </ul>

        <h2>3. Sharing Your Information</h2>
        <p>
          We do not sell or rent your data. Your information may be shared only with trusted third parties:
        </p>
        <ul>
          <li>Payment processors (e.g., Stripe) to handle purchases.</li>
          <li>Cloud service providers for secure data storage.</li>
          <li>Legal authorities if required by law.</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          We take reasonable measures to protect your information, including encryption and secure servers.
          However, no method of transmission over the internet or electronic storage is completely secure.
        </p>

        <h2>5. Your Rights</h2>
        <p>
          You can contact us to access, correct, or delete your personal information. You may also opt out of marketing communications.
        </p>

        

        <h2>7. Third-Party Services</h2>
        <p>
          We use third-party services (e.g., Stripe, PayPal) to process payments. Please review their privacy policies:
        </p>
        <ul>
          <li><a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Stripe Privacy Policy</a></li>
          {/* <li><a href="https://www.paypal.com/privacy" target="_blank" rel="noopener noreferrer">PayPal Privacy Policy</a></li> */}
        </ul>

        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted here with the updated date.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at: <br/>
          <a href="mailto:privacy@server.com" className={styles.rightColumn}>privacy@server.com</a>
        </p>
      </div>
    </div>
  )
}