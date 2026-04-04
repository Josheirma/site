import styles from '../styles/failed.module.css';

export default function Failed() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Payment Failed!</h1>
        <div className={styles.content}>
          <p>Payment didn’t go through.</p> You can try again or use a different payment method.
        </div>
      </div>
    </div>
  );
}