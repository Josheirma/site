import styles from '../styles/changelog.module.css'

export default function Changelog() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Changelog</h1>
      </div>

      <div className={styles.content}>

        {/* Upcoming Release */}
        <div className={styles.section}>
          <h2>v1.0.0 (Expected: June 2026)</h2>
          <p>Initial public release of WorkMate.</p>

          <ul>
            <li>Core productivity features implemented</li>
            <li>User licensing and purchase system</li>
            <li>Download and installation support</li>
            <li>Basic UI and navigation system</li>
          </ul>
        </div>

        {/* Future versions placeholder */}
        <div className={styles.section}>
          <h2>Future Updates</h2>
          <p>Planned improvements and features may include:</p>

          <ul>
            <li>Performance optimizations</li>
            <li>UI/UX improvements</li>
            <li>Additional productivity tools</li>
            <li>Bug fixes and stability updates</li>
          </ul>
        </div>

      </div>
    </div>
  )
}