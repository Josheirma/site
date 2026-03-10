import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import styles from '../styles/Layout.module.css';

const footerLinks = {
  Product: [
    { label: 'Home',      to: '/Home'     },
    { label: 'Features',  to: '/Features' },
    { label: 'Purchase',  to: '/Purchase' },
    { label: 'Download',  to: '/Download' },
    { label: 'Changelog', to: '#'         },
  ],
  Support: [
    { label: 'Docs',    to: '/Docs' },
    { label: 'FAQ',     to: '#'     },
    { label: 'Contact', to: '#'     },
    { label: 'Status',  to: '#'     },
  ],
  Company: [
    { label: 'About',   to: '#' },
    { label: 'Blog',    to: '#' },
    { label: 'Careers', to: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy',   to: '#' },
    { label: 'Terms of Service', to: '#' },
    { label: 'Cookie Policy',    to: '#' },
    { label: 'Refund Policy',    to: '#' },
  ],
};

const linkStyle = { color: "#aaa", textDecoration: "none", fontSize: "13px", lineHeight: 2 };

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.grid} aria-hidden="true" />

      {/* Header */}
      <header className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>

        {/* Logo */}
        <button
          className={styles.logo}
          onClick={() => navigate('/')}
          aria-label="Workmate home"
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span className={styles.logoMark}>S</span>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <span className={styles.company}>Simplistics Inc.</span>
              <span className={styles.logoWord}>Workmate ©</span>
            </div>
          </div>
        </button>

        {/* Nav links */}
        <nav className={styles.links} aria-label="Main navigation">
          <a href="/purchase" className={styles.navBtnBlue}>Purchase</a>
          <a href="/download" className={styles.navBtnBlue}>Download</a>
        </nav>

      </header>

      {/* Page content */}
      <main className={styles.main}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerDivider} />
        <div className={styles.footerGrid}>
          {Object.entries(footerLinks).map(([section, items]) => (
            <div key={section} className={styles.footerSection}>
              <h4 className={styles.footerHeading}>{section}</h4>
              {items.map(({ label, to }) => (
                to.startsWith('/') ? (
                  <Link key={label} to={to} className={styles.footerLink}>{label}</Link>
                ) : (
                  <a key={label} href={to} className={styles.footerLink}>{label}</a>
                )
              ))}
            </div>
          ))}
        </div>
        <span className={styles.footerCopy}>© 2025 Simplistics Inc. All rights reserved, WorkMate.</span>
      </footer>
    </div>
  );
}
