import { useEffect } from "react";
import styles from '../styles/download_page.module.css';

export default function Download_Page() {

 
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Download WorkMate</h1>
      </div>

      <div className={styles.content}>
       
        <h2>Version</h2>
        <p>v1.0.0 (Expected: June 2026)</p>

        <h2>System Requirements</h2>
        <ul>
          <li>Windows 10 or 11</li>
          <li>4GB RAM minimum</li>
          <li>100MB available storage</li>
        </ul>

        <h2>Installation</h2>
        <ul>
          <li>Open the downloaded file (.exe)</li>
          <li>Follow the installation steps</li>
          <li>Launch WorkMate after installation</li>
        </ul>

        <h2>License</h2>
        <p>
          After purchase, you will receive a license key via email.
          Enter your key when prompted in the application.
        </p>

        <h2>Need Help?</h2>
        <p>
          Contact support: <br />
          <a href="mailto:support@server.com" className={styles.rightColumn}>
            support@server.com
          </a>
        </p>
      </div>
    </div>
  );
}