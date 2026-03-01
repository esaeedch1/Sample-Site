"use client";

import { useState } from "react";

const PAYMENT_METHODS = [
    { id: "jazzcash", name: "JazzCash", active: true },
    { id: "sadapay", name: "SadaPay", active: true },
    { id: "easypaisa", name: "EasyPaisa", active: true },
    { id: "debitcard", name: "Debit Card", active: true },
    { id: "online-banking", name: "Online Banking App", active: true },
];

export default function PaymentSettings() {
    const [paymentMethods, setPaymentMethods] = useState(PAYMENT_METHODS);
    const [bankAccount, setBankAccount] = useState({
        bankName: "",
        accountTitle: "",
        iban: ""
    });
    const [isSaved, setIsSaved] = useState(false);

    const toggleMethod = (id: string) => {
        setPaymentMethods(paymentMethods.map(m =>
            m.id === id ? { ...m, active: !m.active } : m
        ));
    };

    const handleSaveAccount = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 3000);
        alert("Bank account details saved successfully!");
    };

    return (
        <div className="payment-settings-page glass-panel">
            <div className="page-header">
                <h1>Payment Settings</h1>
                <p className="text-muted">Configure how you receive payments and what methods are available to customers.</p>
            </div>

            <div className="settings-grid">
                <section className="settings-card glass-panel">
                    <h2>Active Payment Methods</h2>
                    <p className="text-secondary mb-4">Select which payment options to show at checkout.</p>
                    <div className="methods-list">
                        {paymentMethods.map(method => (
                            <div key={method.id} className="method-item">
                                <span className="method-name">{method.name}</span>
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        checked={method.active}
                                        onChange={() => toggleMethod(method.id)}
                                    />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="settings-card glass-panel">
                    <h2>Receiver Account Details</h2>
                    <p className="text-secondary mb-4">Enter your bank details to receive order amounts directly.</p>
                    <form className="account-form" onSubmit={handleSaveAccount}>
                        <div className="form-group">
                            <label>Bank Name:</label>
                            <input
                                type="text"
                                value={bankAccount.bankName}
                                onChange={(e) => setBankAccount({ ...bankAccount, bankName: e.target.value })}
                                placeholder="e.g. HBL, Alfalah, Meezan"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Account Title:</label>
                            <input
                                type="text"
                                value={bankAccount.accountTitle}
                                onChange={(e) => setBankAccount({ ...bankAccount, accountTitle: e.target.value })}
                                placeholder="Name on account"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>IBAN:</label>
                            <input
                                type="text"
                                value={bankAccount.iban}
                                onChange={(e) => setBankAccount({ ...bankAccount, iban: e.target.value })}
                                placeholder="PK00 XXXX XXXX XXXX XXXX"
                                required
                            />
                        </div>
                        <button type="submit" className={`btn-primary ${isSaved ? "saved" : ""}`}>
                            {isSaved ? "Account Saved ✓" : "Save Account Details"}
                        </button>
                    </form>
                </section>
            </div>

            <style jsx>{`
        .payment-settings-page {
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
        }
        .page-header { margin-bottom: var(--spacing-xl); }
        .settings-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--spacing-lg);
        }
        @media (min-width: 1024px) {
          .settings-grid { grid-template-columns: 1fr 1fr; }
        }
        .settings-card {
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
        }
        .settings-card h2 { font-size: 1.25rem; margin-bottom: 0.5rem; }
        .text-secondary { font-size: 0.875rem; color: var(--text-secondary); }
        .mb-4 { margin-bottom: 1.5rem; }

        .methods-list { display: flex; flex-direction: column; gap: var(--spacing-md); }
        .method-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--spacing-sm) var(--spacing-md);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }
        .method-item:hover { background: rgba(255, 255, 255, 0.06); }

        /* Switch Styling */
        .switch {
          position: relative;
          display: inline-block;
          width: 50px;
          height: 24px;
        }
        .switch input { opacity: 0; width: 0; height: 0; }
        .slider {
          position: absolute;
          cursor: pointer;
          inset: 0;
          background-color: var(--bg-tertiary);
          transition: .4s;
          border: 1px solid var(--border-color);
        }
        .slider:before {
          position: absolute;
          content: "";
          height: 16px;
          width: 16px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: .4s;
        }
        input:checked + .slider { background-color: var(--accent-color); }
        input:checked + .slider:before { transform: translateX(26px); }
        .slider.round { border-radius: 34px; }
        .slider.round:before { border-radius: 50%; }

        .account-form { display: flex; flex-direction: column; gap: var(--spacing-md); }
        .form-group { display: flex; flex-direction: column; gap: 0.5rem; }
        .form-group label { font-size: 0.875rem; font-weight: 500; }
        .form-group input {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 0.75rem;
          border-radius: var(--radius-md);
        }
        .btn-primary.saved { background: #27ae60; color: white; transform: scale(1.05); }
      `}</style>
        </div>
    );
}
