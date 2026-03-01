"use client";

import { useState, useEffect } from "react";

const PAYMENT_METHODS = [
    { id: "jazzcash", name: "JazzCash", active: true },
    { id: "sadapay", name: "SadaPay", active: true },
    { id: "easypaisa", name: "EasyPaisa", active: true },
    { id: "debitcard", name: "Debit Card", active: true },
    { id: "online-banking", name: "Online Banking App", active: true },
    { id: "crypto", name: "Cryptocurrency (USDT/BTC)", active: false },
];

export default function PaymentSettings() {
    const [paymentMethods, setPaymentMethods] = useState(PAYMENT_METHODS);
    const [bankAccount, setBankAccount] = useState({ bankName: "", accountTitle: "", iban: "" });
    const [cryptoWallet, setCryptoWallet] = useState({ walletAddress: "", network: "TRC20" });
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        const savedMethods = localStorage.getItem('active_payment_methods');
        const savedBank = localStorage.getItem('receiver_bank_details');
        const savedCrypto = localStorage.getItem('receiver_crypto_details');

        if (savedMethods) setPaymentMethods(JSON.parse(savedMethods));
        if (savedBank) setBankAccount(JSON.parse(savedBank));
        if (savedCrypto) setCryptoWallet(JSON.parse(savedCrypto));
    }, []);

    const toggleMethod = (id: string) => {
        setPaymentMethods(paymentMethods.map(m =>
            m.id === id ? { ...m, active: !m.active } : m
        ));
    };

    const handleSaveAll = () => {
        setIsSaving(true);
        localStorage.setItem('active_payment_methods', JSON.stringify(paymentMethods));
        localStorage.setItem('receiver_bank_details', JSON.stringify(bankAccount));
        localStorage.setItem('receiver_crypto_details', JSON.stringify(cryptoWallet));

        setTimeout(() => {
            setIsSaving(false);
            alert("All payment settings saved successfully! These changes are now live for buyers.");
        }, 800);
    };

    return (
        <div className="payment-settings-page glass-panel">
            <div className="page-header">
                <div className="header-info">
                    <h1>Payment Settings & Gateways</h1>
                    <p className="text-muted">Manage active methods and receiver accounts. Changes must be saved to go live.</p>
                </div>
                <button
                    className={`btn-primary save-all-btn ${isSaving ? 'loading' : ''}`}
                    onClick={handleSaveAll}
                    disabled={isSaving}
                >
                    {isSaving ? "Saving..." : "Save All Settings"}
                </button>
            </div>

            <div className="settings-grid">
                <section className="settings-card glass-panel">
                    <h2>Available Methods</h2>
                    <p className="text-secondary mb-4">Toggle visibility for customers at checkout.</p>
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

                <div className="receiver-configs">
                    <section className="settings-card glass-panel mb-4">
                        <h2>Bank Receiver Account</h2>
                        <div className="account-form">
                            <div className="form-group">
                                <label>Bank Name:</label>
                                <input
                                    type="text"
                                    value={bankAccount.bankName}
                                    onChange={(e) => setBankAccount({ ...bankAccount, bankName: e.target.value })}
                                    placeholder="e.g. HBL"
                                />
                            </div>
                            <div className="form-group">
                                <label>Account Title:</label>
                                <input
                                    type="text"
                                    value={bankAccount.accountTitle}
                                    onChange={(e) => setBankAccount({ ...bankAccount, accountTitle: e.target.value })}
                                    placeholder="Title"
                                />
                            </div>
                            <div className="form-group">
                                <label>IBAN:</label>
                                <input
                                    type="text"
                                    value={bankAccount.iban}
                                    onChange={(e) => setBankAccount({ ...bankAccount, iban: e.target.value })}
                                    placeholder="PK..."
                                />
                            </div>
                        </div>
                    </section>

                    <section className="settings-card glass-panel">
                        <h2>Crypto Wallet Receiver</h2>
                        <div className="account-form">
                            <div className="form-group">
                                <label>Wallet Address:</label>
                                <input
                                    type="text"
                                    value={cryptoWallet.walletAddress}
                                    onChange={(e) => setCryptoWallet({ ...cryptoWallet, walletAddress: e.target.value })}
                                    placeholder="0x..."
                                />
                            </div>
                            <div className="form-group">
                                <label>Network:</label>
                                <select
                                    value={cryptoWallet.network}
                                    onChange={(e) => setCryptoWallet({ ...cryptoWallet, network: e.target.value })}
                                    className="custom-select"
                                >
                                    <option value="TRC20">TRC20</option>
                                    <option value="ERC20">ERC20</option>
                                    <option value="BEP20">BEP20</option>
                                    <option value="BTC">Bitcoin</option>
                                </select>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <style jsx>{`
        .payment-settings-page {
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
        }
        .page-header { 
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
          margin-bottom: var(--spacing-xl); 
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .header-info { flex: 1; min-width: 280px; }
        .save-all-btn {
          padding: 1rem 2rem;
          font-size: 1rem;
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
        }
        .save-all-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
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

        .receiver-configs {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }
        .custom-select {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 0.75rem;
          border-radius: var(--radius-md);
          cursor: pointer;
        }

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
