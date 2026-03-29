import styles from '../styles/success.module.css';

export default function Success() {
  return (
    <div>
      <div className={styles.wrapper}>
        <div style={{ fontSize: "1.5rem" }}>Payment Successful!</div>
        <div style={{ fontSize: "1.15rem" }}>Check your email for your license key.</div>
      </div>
    </div>
  );
}