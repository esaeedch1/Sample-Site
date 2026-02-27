"use client";

import Link from "next/link";
import { ReactNode } from "react";

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="store-shell">
      <header className="store-header glass-panel">
        <div className="container header-content">
          <Link href="/store" className="logo">
            SAMPLE BRAND
          </Link>

          <nav className="main-nav">
            <Link href="/store/category/women">Women</Link>
            <Link href="/store/category/men">Men</Link>
            <Link href="/store/category/fragrances">Fragrances</Link>
            <Link href="/store/category/beauty">Beauty</Link>
            <Link href="/store/category/accessories">Accessories</Link>
            <Link href="/store/sales" className="sale-link">Sales</Link>
          </nav>

          <div className="header-actions">
            <Link href="/store/account">Account</Link>
            <Link href="/store/cart" className="cart-btn">
              Cart (0)
            </Link>
          </div>
        </div>
      </header>

      <main className="store-content">
        {children}
      </main>

      <footer className="store-footer">
        <div className="container footer-grid">
          <div>
            <h3>Sample Brand</h3>
            <p className="text-muted">Premium fashion and accessories for the modern world.</p>
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
          <p>&copy; {new Date().getFullYear()} Sample Brand. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
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
        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          background: var(--gradient-gold);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
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
        .sale-link {
          color: #e74c3c !important;
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
        }
        .cart-btn {
          background: rgba(255, 255, 255, 0.05);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-color);
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
