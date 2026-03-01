"use client";

import Link from "next/link";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="dashboard-shell">
      <aside className="dashboard-sidebar glass-panel">
        <div className="sidebar-header">
          <Link href="/dashboard" className="logo-container">
            <h1 className="logo-text">CutiXa Adore</h1>
            <span className="logo-tagline">Admin Panel</span>
          </Link>
        </div>

        <nav className="sidebar-nav">
          <Link href="/dashboard" className="nav-link">Overview</Link>
          <Link href="/dashboard/products" className="nav-link">Manage Products</Link>
          <Link href="/dashboard/content" className="nav-link">Page Content</Link>
          <Link href="/dashboard/roles" className="nav-link">Manage Roles</Link>
          <Link href="/dashboard/payments" className="nav-link">Payment Settings</Link>
          <Link href="/store" className="nav-link back-to-store">Back to Store</Link>
        </nav>
      </aside>

      <main className="dashboard-content">
        <header className="dashboard-header glass-panel">
          <div className="container header-content">
            <h2>Dashboard</h2>
            <div className="user-profile">
              <span>Admin User</span>
            </div>
          </div>
        </header>

        <section className="dashboard-body container animate-fade-in">
          {children}
        </section>
      </main>

      <style jsx>{`
        .dashboard-shell {
          display: flex;
          min-height: 100vh;
          background: var(--bg-primary);
        }
        .dashboard-sidebar {
          width: 280px;
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          padding: var(--spacing-md);
          position: fixed;
          height: 100vh;
          z-index: 60;
        }
        .sidebar-header {
          margin-bottom: var(--spacing-xl);
          padding: var(--spacing-sm);
        }
        .logo-container {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }
        .logo-text {
          font-family: 'Monotype Corsiva', 'Apple Chancery', 'cursive';
          font-size: 1.5rem;
          font-weight: 700;
          background: var(--gradient-gold);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .logo-tagline {
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--text-secondary);
        }
        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }
        .nav-link {
          padding: var(--spacing-sm) var(--spacing-md);
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }
        .nav-link:hover {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
        }
        .back-to-store {
          margin-top: var(--spacing-xl);
          color: var(--accent-color);
          border: 1px solid rgba(212, 175, 55, 0.2);
        }
        
        .dashboard-content {
          flex: 1;
          margin-left: 280px;
          display: flex;
          flex-direction: column;
        }
        .dashboard-header {
          height: 80px;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .dashboard-body {
          padding-top: var(--spacing-lg);
          padding-bottom: var(--spacing-xl);
        }
      `}</style>
    </div>
  );
}
