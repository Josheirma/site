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
      <footer style={{ padding: "0 60px 32px" }}>

        <style>{`
          .footer-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 40px;
            margin-bottom: 40px;
          }

          @media (max-width: 420px) {
            .footer-outer {
              padding: 0 16px 24px !important;
            }

            .footer-grid {
              grid-template-columns: repeat(2, 1fr);
              grid-template-rows: auto auto;
              gap: 28px 20px;
            }

            /* Row 1: Product | Support */
            .footer-grid > div:nth-child(1) { grid-column: 1; grid-row: 1; }
            .footer-grid > div:nth-child(2) { grid-column: 2; grid-row: 1; }
            /* Row 2: Company | Legal */
            .footer-grid > div:nth-child(3) { grid-column: 1; grid-row: 2; }
            .footer-grid > div:nth-child(4) { grid-column: 2; grid-row: 2; }
          }
        `}</style>

        <div style={{ borderTop: "1px solid #333", marginBottom: "2rem", marginTop: "2.4rem" }} />

        <div className="footer-grid">
          {Object.entries(footerLinks).map(([section, items]) => (
            <div key={section} style={{ display: "flex", flexDirection: "column" }}>
              <h4 style={{ color: "white", margin: "0 0 12px", fontSize: "13px", fontWeight: "600", letterSpacing: "0.05em" }}>
                {section}
              </h4>
              {items.map(({ label, to }) => (
                to.startsWith('/') ? (
                  <Link key={label} to={to} style={linkStyle}>{label}</Link>
                ) : (
                  <a key={label} href={to} style={linkStyle}>{label}</a>
                )
              ))}
            </div>
          ))}
        </div>

        <span style={{ color: "#555", fontSize: "12px" }}>© 2025 Simplistics Inc. All rights reserved, WorkMate.</span>

      </footer>
    </div>
  );
}
