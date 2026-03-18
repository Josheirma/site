import styles from '../styles/about.module.css'

export default function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heading}>About WorkMate</h1>
      </div>

      <div className={styles.content}>
        <p>
          WorkMate is a productivity software developed by Simplistics Inc. 
          Our goal is to help individuals and teams organize, track, and manage their work efficiently.
        </p>

        <h2>Our Mission</h2>
        <p>
          To simplify workflows, reduce distractions, and empower users to get more done with less effort.
        </p>

        <h2>Our Team</h2>
        <p>
          WorkMate is built by a passionate team of software developers and designers who care about user experience and privacy.
        </p>

        <h2>Why Choose WorkMate?</h2>
        <ul>
          <li>Simple, intuitive interface for all users.</li>
          <li>Secure and privacy-focused.</li>
          
        </ul>

        <h2>Contact Us</h2>
        <p>
          Have questions or feedback? Reach out to us at: <br/>
          <a href="mailto:support@server.com" className={styles.rightColumn}>support@server.com</a>
        </p>
      </div>
    </div>
  )
}