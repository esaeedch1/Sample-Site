"use client";

import { useState } from "react";
import Link from "next/link";

export default function AccountPage() {
    const [activeTab, setActiveTab] = useState("profile");

    return (
        <div className="account-page container animate-fade-in">
            <div className="account-header">
                <h1>My Account</h1>
                <p className="subtitle">Welcome back, John Doe</p>
            </div>

            <div className="account-layout">
                <aside className="account-sidebar glass-panel">
                    <nav className="account-nav">
                        <button
                            className={activeTab === "profile" ? "active" : ""}
                            onClick={() => setActiveTab("profile")}
                        >
                            Profile Summary
                        </button>
                        <button
                            className={activeTab === "orders" ? "active" : ""}
                            onClick={() => setActiveTab("orders")}
                        >
                            Order History
                        </button>
                        <button
                            className={activeTab === "addresses" ? "active" : ""}
                            onClick={() => setActiveTab("addresses")}
                        >
                            Addresses
                        </button>
                        <button className="logout-btn">
                            Sign Out
                        </button>
                    </nav>
                </aside>

                <main className="account-content glass-panel">
                    {activeTab === "profile" && (
                        <div className="tab-pane animate-fade-in">
                            <h2>Profile Information</h2>
                            <div className="info-grid">
                                <div className="info-group">
                                    <label>Full Name</label>
                                    <p>John Doe</p>
                                </div>
                                <div className="info-group">
                                    <label>Email Address</label>
                                    <p>john.doe@example.com</p>
                                </div>
                                <div className="info-group">
                                    <label>Phone Number</label>
                                    <p>+92 300 1234567</p>
                                </div>
                            </div>
                            <button className="btn-secondary mt-lg">Edit Profile</button>
                        </div>
                    )}

                    {activeTab === "orders" && (
                        <div className="tab-pane animate-fade-in">
                            <h2>Order History</h2>
                            <div className="order-list">
                                <div className="order-card">
                                    <div className="order-header">
                                        <div>
                                            <span className="order-number">Order #SB-10492</span>
                                            <span className="order-date">Placed on Mar 15, 2026</span>
                                        </div>
                                        <span className="order-status status-delivered">Delivered</span>
                                    </div>
                                    <div className="order-details">
                                        <p>Total: <strong>$120.00</strong></p>
                                        <Link href="#" className="view-link">View Details</Link>
                                    </div>
                                </div>
                                <div className="order-card">
                                    <div className="order-header">
                                        <div>
                                            <span className="order-number">Order #SB-10511</span>
                                            <span className="order-date">Placed on Apr 02, 2026</span>
                                        </div>
                                        <span className="order-status status-processing">Processing</span>
                                    </div>
                                    <div className="order-details">
                                        <p>Total: <strong>$200.00</strong></p>
                                        <Link href="#" className="view-link">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "addresses" && (
                        <div className="tab-pane animate-fade-in">
                            <div className="flex-between">
                                <h2>Saved Addresses</h2>
                                <button className="btn-secondary small-btn">Add New</button>
                            </div>
                            <div className="address-grid">
                                <div className="address-card">
                                    <span className="badge">Default Billing & Shipping</span>
                                    <h3>John Doe</h3>
                                    <p>123 Fashion Avenue<br />Gulberg III, Lahore<br />Pakistan, 54000</p>
                                    <div className="address-actions">
                                        <button>Edit</button>
                                        <button className="text-danger">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>

            <style jsx>{`
        .account-page {
          padding-top: var(--spacing-xl);
          padding-bottom: var(--spacing-xl);
        }
        .account-header {
          margin-bottom: var(--spacing-xl);
          text-align: center;
        }
        .account-header h1 {
          font-size: 2.5rem;
          margin-bottom: var(--spacing-xs);
        }
        .subtitle {
          color: var(--text-secondary);
        }

        .account-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--spacing-lg);
        }
        @media (min-width: 768px) {
          .account-layout { grid-template-columns: 250px 1fr; }
        }

        .account-sidebar {
          border-radius: var(--radius-lg);
          height: fit-content;
        }
        .account-nav {
          display: flex;
          flex-direction: column;
        }
        .account-nav button {
          background: none;
          border: none;
          color: var(--text-secondary);
          text-align: left;
          padding: var(--spacing-md) var(--spacing-lg);
          font-size: 1rem;
          border-bottom: 1px solid var(--border-color);
          transition: all var(--transition-fast);
        }
        .account-nav button:first-child {
          border-radius: var(--radius-lg) var(--radius-lg) 0 0;
        }
        .account-nav button:last-child {
          border-bottom: none;
          border-radius: 0 0 var(--radius-lg) var(--radius-lg);
        }
        .account-nav button:hover {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
        }
        .account-nav button.active {
          color: var(--accent-color);
          background: rgba(212, 175, 55, 0.05);
          border-left: 3px solid var(--accent-color);
        }
        .logout-btn {
          color: #e74c3c !important;
        }

        .account-content {
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          min-height: 400px;
        }
        .account-content h2 {
          font-size: 1.5rem;
          margin-bottom: var(--spacing-lg);
          padding-bottom: var(--spacing-sm);
          border-bottom: 1px solid var(--border-color);
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--spacing-lg);
        }
        @media (min-width: 640px) {
          .info-grid { grid-template-columns: 1fr 1fr; }
        }
        .info-group label {
          color: var(--text-secondary);
          font-size: 0.875rem;
          display: block;
          margin-bottom: var(--spacing-xs);
        }
        .info-group p {
          font-size: 1.125rem;
          font-weight: 500;
        }
        .mt-lg {
          margin-top: var(--spacing-lg);
        }
        .btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 0.5rem 1.5rem;
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
        }
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--text-secondary);
        }

        .order-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }
        .order-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: var(--spacing-md);
        }
        .order-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--spacing-md);
          padding-bottom: var(--spacing-md);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .order-number {
          display: block;
          font-weight: 600;
          font-size: 1.125rem;
          margin-bottom: 0.25rem;
        }
        .order-date {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }
        .order-status {
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .status-delivered {
          background: rgba(46, 204, 113, 0.1);
          color: #2ecc71;
          border: 1px solid rgba(46, 204, 113, 0.2);
        }
        .status-processing {
          background: rgba(241, 196, 15, 0.1);
          color: #f1c40f;
          border: 1px solid rgba(241, 196, 15, 0.2);
        }
        .order-details {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .view-link {
          color: var(--accent-color);
          font-size: 0.875rem;
        }
        .view-link:hover {
          text-decoration: underline;
        }

        .flex-between {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-lg);
          padding-bottom: var(--spacing-sm);
          border-bottom: 1px solid var(--border-color);
        }
        .flex-between h2 {
          border: none;
          margin: 0;
          padding: 0;
        }
        .small-btn {
          padding: 0.25rem 1rem;
          font-size: 0.875rem;
        }
        .address-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: var(--spacing-lg);
          position: relative;
        }
        .badge {
          position: absolute;
          top: var(--spacing-md);
          right: var(--spacing-md);
          background: rgba(212, 175, 55, 0.1);
          color: var(--accent-color);
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(212, 175, 55, 0.2);
        }
        .address-card h3 {
          margin-bottom: var(--spacing-sm);
        }
        .address-card p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: var(--spacing-md);
        }
        .address-actions {
          display: flex;
          gap: var(--spacing-md);
        }
        .address-actions button {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 0.875rem;
          text-decoration: underline;
        }
        .address-actions button:hover {
          color: var(--text-primary);
        }
        .text-danger:hover {
          color: #e74c3c !important;
        }
      `}</style>
        </div>
    );
}
