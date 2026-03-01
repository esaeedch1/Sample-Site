"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { useCart, CartProvider } from "@/lib/CartContext";
import { CurrencyProvider, useCurrency } from "@/lib/CurrencyContext";

function StoreLayoutContent({ children }: { children: ReactNode }) {
  const { totalItems } = useCart();
  const { currencyPref, setCurrencyPref, selectedCountry } = useCurrency();

  return (
    <div className="store-shell">
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <Link href="/store/policies#contact">Contact us</Link>
            <Link href="/store/login">Account</Link>
          </div>
          <div className="top-bar-right">
            <div className="language-selector nav-dropdown">
              <span className="lang-toggle">🌐 English</span>
              <div className="dropdown-menu glass-panel">
                <button onClick={() => alert('Language: English')}>English</button>
                <button onClick={() => alert('Language: Urdu')}>Urdu</button>
                <button onClick={() => alert('Language: Arabic')}>Arabic</button>
              </div>
            </div>
            <Link href="/store/login" className="login-reg-btn">Login / Register</Link>
          </div>
        </div>
      </div>

      <header className="store-header glass-panel">
        <div className="container header-content">
          <Link href="/store" className="logo-container">
            <h1 className="logo-text">CutiXa Adore</h1>
            <span className="logo-tagline">Love Your Skin</span>
          </Link>

          <nav className="main-nav">
            <div className="nav-dropdown">
              <Link href="/store/category/skin-care" className="nav-link-primary">Skin Care</Link>
              <div className="dropdown-menu glass-panel">
                <Link href="/store/category/extracts">Extracts</Link>
                <Link href="/store/category/serums">Serums</Link>
                <Link href="/store/category/beauty-kits">Beauty Kits</Link>
                <Link href="/store/category/hair-care">Hair Care</Link>
                <Link href="/store/category/creams">Creams</Link>
                <Link href="/store/category/lotions">Lotions</Link>
                <Link href="/store/category/cleanser">Cleanser</Link>
                <Link href="/store/category/tonner">Tonner</Link>
                <Link href="/store/category/lipsticks">Lipsticks</Link>
              </div>
            </div>
            <Link href="/store/category/new-arrivals">New Arrivals</Link>
            <Link href="/store/sales" className="sale-link">Ramadan Sale</Link>
          </nav>

          <div className="header-actions">
            <div className="header-currency-pref">
              <button
                className={currencyPref === 'USD' ? 'active' : ''}
                onClick={() => setCurrencyPref('USD')}
              >
                USD
              </button>
              <button
                className={currencyPref === 'native' ? 'active' : ''}
                onClick={() => setCurrencyPref('native')}
              >
                {selectedCountry?.currency || 'PKR'}
              </button>
            </div>

            <Link href="/dashboard" className="dashboard-link">Dashboard</Link>
            <Link href="/store/login">Account</Link>
            <Link href="/store/cart" className="cart-btn">
              Cart
              {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            </Link>
          </div>
        </div>
      </header>

      <main className="store-content">
        {children}
      </main>

      <div className="floating-actions">
        <button className="fab-main">
          <span>+</span>
          <div className="fab-options">
            <button className="fab-option" onClick={() => alert('Opening Chat...')}>
              <span className="fab-label">Chat</span>
              <span className="fab-icon">💬</span>
            </button>
            <button className="fab-option" onClick={() => alert('Opening Preferences...')}>
              <span className="fab-label">Preferences</span>
              <span className="fab-icon">⚙️</span>
            </button>
            <button className="fab-option" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <span className="fab-label">Move to top</span>
              <span className="fab-icon">↑</span>
            </button>
          </div>
        </button>
      </div>

      <footer className="store-footer">
        <div className="container footer-grid">
          <div>
            <h3>CutiXa Adore</h3>
            <p className="text-muted">Love Your Skin. Premium skincare for the modern world.</p>
          </div>
          <div>
            <h4>Customer Service</h4>
            <ul className="footer-links">
              <li><Link href="/store/policies#faq">FAQ</Link></li>
              <li><Link href="/store/policies#contact">Contact Us</Link></li>
              <li><Link href="/store/policies#shipping">Shipping Policy</Link></li>
              <li><Link href="/store/policies#returns">Returns & Exchanges</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom container">
          <p>&copy; {new Date().getFullYear()} CutiXa Adore. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        .top-bar {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(5px);
          border-bottom: 1px solid var(--border-color);
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .top-bar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 40px;
        }
        .top-bar-left, .top-bar-right {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }
        .top-bar-left a:hover, .top-bar-right a:hover {
          color: var(--accent-color);
        }
        .lang-toggle {
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .lang-toggle:hover { color: var(--accent-color); }
        .login-reg-btn {
          background: var(--accent-color);
          color: black;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-weight: 600;
          transition: transform 0.2s;
        }
        .login-reg-btn:hover {
          transform: scale(1.05);
          color: black;
        }

        .store-shell {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .store-header {
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid var(--border-color);
        }
        /* FAB Styles */
        .floating-actions {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 100;
        }
        .fab-main {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--accent-color);
          border: none;
          color: black;
          font-size: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
          position: relative;
          transition: transform 0.3s;
        }
        .fab-main:hover {
          transform: rotate(45deg) scale(1.1);
        }
        .fab-options {
          position: absolute;
          bottom: 100%;
          right: 0;
          margin-bottom: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s;
          transform: translateY(10px);
        }
        .fab-main:hover .fab-options {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          transform: rotate(-45deg); /* Counter rotate to keep upright */
        }
        /* Fixing the counter rotate logic */
        .fab-main:hover .fab-options {
           transform: translateY(0) rotate(-45deg);
        }
        .fab-option {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-full);
          color: var(--text-primary);
          white-space: nowrap;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.5);
          transition: all 0.2s;
        }
        .fab-option:hover {
          background: var(--accent-color);
          color: black;
          border-color: var(--accent-color);
        }
        .fab-label { font-size: 0.875rem; font-weight: 500; }
        .fab-icon { font-size: 1.25rem; }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }
        .logo-container {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }
        .logo-text {
          font-family: 'Monotype Corsiva', 'Apple Chancery', 'cursive';
          font-size: 1.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          background: var(--gradient-gold);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0;
        }
        .logo-tagline {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--text-secondary);
          margin-top: -2px;
          text-align: center;
        }
        .main-nav {
          display: none;
          gap: var(--spacing-lg);
          font-weight: 500;
        }
        @media (min-width: 1024px) {
          .main-nav { display: flex; }
        }
        .main-nav a:hover {
          color: var(--accent-color);
        }
        .nav-dropdown {
          position: relative;
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 200px;
          display: none;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1rem;
          margin-top: 0.5rem;
          border-radius: var(--radius-md);
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }
        .nav-dropdown:hover .dropdown-menu {
          display: flex;
        }
        .dropdown-menu a {
          font-size: 0.875rem;
          color: var(--text-secondary);
          transition: color 0.2s;
        }
        .dropdown-menu a:hover {
          color: var(--accent-color);
        }
        .dropdown-menu button {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          text-align: left;
          padding: 0.5rem;
          cursor: pointer;
          width: 100%;
          font-size: 0.875rem;
          transition: all 0.2s;
          border-radius: var(--radius-sm);
        }
        .dropdown-menu button:hover {
          color: var(--accent-color);
          background: rgba(255, 255, 255, 0.05);
        }
        .nav-link-primary {
          color: var(--accent-color);
          font-weight: 600;
        }
        .sale-link {
          color: #e74c3c !important;
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
        }
        .header-currency-pref {
          display: flex;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          padding: 2px;
          margin-right: 0.5rem;
        }
        .header-currency-pref button {
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s;
        }
        .header-currency-pref button.active {
          background: var(--accent-color);
          color: black;
          font-weight: 600;
        }
        .dashboard-link {
          color: var(--accent-color);
          font-weight: 600;
          font-size: 0.875rem;
          border: 1px solid rgba(212, 175, 55, 0.3);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-sm);
        }
        .dashboard-link:hover {
          background: rgba(212, 175, 55, 0.1);
        }
        .cart-btn {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-color);
        }
        .cart-count {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #e74c3c;
          color: white;
          font-size: 0.7rem;
          font-weight: 700;
          min-width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .store-content {
          flex: 1;
        }
        .store-footer {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          padding-top: var(--spacing-xl);
          margin-top: var(--spacing-xl);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-xl);
        }
        @media (min-width: 768px) {
          .footer-grid { grid-template-columns: 2fr 1fr; }
        }
        .text-muted {
          color: var(--text-secondary);
          margin-top: var(--spacing-sm);
        }
        .footer-links {
          list-style: none;
          margin-top: var(--spacing-md);
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        .footer-links a {
          color: var(--text-secondary);
        }
        .footer-links a:hover {
          color: var(--text-primary);
        }
        .footer-bottom {
          border-top: 1px solid var(--border-color);
          padding: var(--spacing-md) 0;
          text-align: center;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }
      `}</style>
    </div>
  );
}

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <CurrencyProvider>
      <CartProvider>
        <StoreLayoutContent>{children}</StoreLayoutContent>
      </CartProvider>
    </CurrencyProvider>
  );
}
