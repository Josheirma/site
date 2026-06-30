import { useLocation } from 'react-router-dom';
import styles from '../styles/success.module.css';

export default function Success() {
  const { state } = useLocation();
  const serial = state?.serial;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Payment Successful!</h1>
        <div className={styles.content}>
          {serial ? (
            <>
              <p>Your license key:</p>
              <strong>2222</strong>
              <p>A copy has also been sent to your email.</p>
            </>
          ) : (
            <p>Check your email for your license key.</p>
          )}
        </div>
      </div>
    </div>
  );
}Wopr