import styles from '../styles/success.module.css';

export default function Success() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Payment Successful!</h1>
        <div className={styles.content}>
          Check your email for your license key.
        </div>
      </div>
    </div>
  );
}