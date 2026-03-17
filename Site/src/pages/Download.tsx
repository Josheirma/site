
import React, { useState } from 'react';
import styles from '../styles/Download.module.css';

const Download = () => {
  const [status, setStatus] = useState('');

  const handleDownload = () => {
  setStatus('Downloading...');
  window.location.href = '/api/download/myapp.exe';

  // Clear message after a few seconds
  setTimeout(() => {
    setStatus('');
  }, 5000); // adjust time as needed
};

  return (
    <div className={styles.wrapper}>
      <h3>Download Workmate</h3>
      <button onClick={handleDownload}>
        ⬇ Download myapp.exe
      </button>
      {status && <p>{status}</p>}
    </div>
  );
};


export default Download;