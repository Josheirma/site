import styles from '../styles/contacts.module.css'

export default function Contacts() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.heading}>Contacts</div>

        <div className={styles.content}>
          <div className={`${styles.row} ${styles.topRow}`}>
            <div className={styles.leftColumn}>Support:</div>
            <div className={styles.rightColumn}>support@server.com</div>
          </div>

          <div className={`${styles.row} ${styles.bottomRow}`}>
            <div className={styles.leftColumn}>Issue Reporting:</div>
            <div className={styles.rightColumn}>issues@server.com</div>
          </div>
        </div>
      </div>
    </div>
  )
}