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

  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

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
              <span>Simplistics Inc.</span>
              <span className={styles.logoWord}>Workmate ©</span>
            </div>
          </div>
        </button>

        {/* Nav links */}
        <nav className={styles.links} aria-label="Main navigation">
          <a href="/purchase" className={styles.navBtnBlue}>Purchase</a>
          <a href="/download" className={styles.navBtnBlue}>Download</a>
        </nav>

        {/* Burger */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

      </header>

      {/* Mobile drawer */}
      <div
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className={styles.drawerLinks}>
          <a href="/purchase" className={styles.drawerBtn}>Purchase</a>
          <a href="/download" className={styles.drawerBtn}>Download</a>
        </nav>
      </div>

      {/* Page content */}
      <main className={styles.main}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{ padding: "0 60px 32px" }}>

        <div style={{ borderTop: "1px solid #333", marginBottom: "2rem", marginTop: "2.4rem" }} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px", marginBottom: "40px" }}>
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