import { useState } from "react";
import styles from '../styles/download.module.css';

export default function Download_Page() {
  const [status, setStatus] = useState('');

  const handleDownload = () => {
    setStatus('Your download is starting...');

    // Trigger download without leaving page
    const link = document.createElement('a');
    link.href = '/api/download/myapp.exe';
    link.download = 'WorkMate_v1.0.0.exe';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div className={styles.wrapper}>
      

      <div className={styles.content}>

        <div className={styles.buttonRow}>
          <button className={styles.downloadButton} onClick={handleDownload}>
            ⬇ Download WorkMate v1.0.0
          </button>
        </div>

        {/* Status Message */}
        {status && <p className={styles.status}>{status}</p>}
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

        {/* Download Button */}
        <div className={styles.buttonRow}>
          <button className={styles.downloadButton} onClick={handleDownload}>
            ⬇ Download WorkMate v1.0.0
          </button>
        </div>

        {/* Status Message */}
        {status && <p className={styles.status}>{status}</p>}
      </div>
    </div>
  );
}