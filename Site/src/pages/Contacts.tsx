import styles from '../styles/shared.module.css'

export default function Contacts() {

return(


<div className = {styles.wrapper}>
  <div className={styles.container}>
    <div className={styles.heading}>Contacts</div>
  </div>

  <div className={styles.content}>
    {/* Row 1 */}
    <div className={styles.row}>
      <div className={styles.leftColumn}>Support:</div>
      <div className={styles.rightColumn}>support@server.com</div>
    </div>

    {/* Row 2 */}
    <div className={styles.row}>
      <div className={styles.leftColumn}>Issue Reporting:</div>
      <div className={styles.rightColumn}>issues@server.com</div>
    </div>
  </div>
  </div>

)


} 