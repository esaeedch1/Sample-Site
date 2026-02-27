"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleNextStep = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(2);
    };

    const handlePlaceOrder = () => {
        setIsProcessing(true);
        // Simulate API call for local/intl payment
        setTimeout(() => {
            setIsProcessing(false);
            alert("Order placed successfully! Redirecting to home...");
            router.push("/store");
        }, 2000);
    };

    return (
        <div className="checkout-page container animate-fade-in">
            <div className="checkout-header">
                <h1>Checkout</h1>
                <div className="progress-bar">
                    <div className={`step ${step >= 1 ? "active" : ""}`}>1. Shipping</div>
                    <div className="line"></div>
                    <div className={`step ${step >= 2 ? "active" : ""}`}>2. Payment</div>
                </div>
            </div>

            <div className="checkout-content">
                {step === 1 ? (
                    <div className="checkout-section glass-panel">
                        <h2>Shipping Information</h2>
                        <form onSubmit={handleNextStep}>
                            <div className="form-grid">
                                <div className="input-group">
                                    <label>First Name</label>
                                    <input type="text" required />
                                </div>
                                <div className="input-group">
                                    <label>Last Name</label>
                                    <input type="text" required />
                                </div>
                                <div className="input-group full-width">
                                    <label>Address</label>
                                    <input type="text" required />
                                </div>
                                <div className="input-group">
                                    <label>City</label>
                                    <input type="text" required />
                                </div>
                                <div className="input-group">
                                    <label>Postal Code</label>
                                    <input type="text" required />
                                </div>
                            </div>
                            <button type="submit" className="btn-primary form-btn">Continue to Payment</button>
                        </form>
                    </div>
                ) : (
                    <div className="checkout-section glass-panel animate-fade-in">
                        <h2>Payment Method</h2>
                        <div className="payment-options">
                            <label className="payment-radio">
                                <input type="radio" name="payment" defaultChecked />
                                <span className="radio-custom"></span>
                                <span className="payment-label">Credit/Debit Card (Visa, Mastercard)</span>
                            </label>
                            <label className="payment-radio">
                                <input type="radio" name="payment" />
                                <span className="radio-custom"></span>
                                <span className="payment-label">JazzCash / Easypaisa (Local)</span>
                            </label>
                            <label className="payment-radio">
                                <input type="radio" name="payment" />
                                <span className="radio-custom"></span>
                                <span className="payment-label">Cash on Delivery</span>
                            </label>
                        </div>

                        <div className="card-mockup">
                            <div className="input-group full-width">
                                <label>Card Number</label>
                                <input type="text" placeholder="**** **** **** ****" />
                            </div>
                            <div className="form-grid">
                                <div className="input-group">
                                    <label>Expiry</label>
                                    <input type="text" placeholder="MM/YY" />
                                </div>
                                <div className="input-group">
                                    <label>CVC</label>
                                    <input type="text" placeholder="***" />
                                </div>
                            </div>
                        </div>

                        <div className="checkout-actions">
                            <button className="back-btn" onClick={() => setStep(1)}>← Back to Shipping</button>
                            <button
                                className="btn-primary place-order-btn"
                                onClick={handlePlaceOrder}
                                disabled={isProcessing}
                            >
                                {isProcessing ? "Processing..." : "Place Order ($200.00)"}
                            </button>
                        </div>
                    </div>
                )}

                <div className="order-summary-sidebar glass-panel">
                    <h3>Order Summary</h3>
                    <p className="text-muted mb-4">Mock items for checkout demo</p>
                    <div className="summary-items">
                        <div className="summary-item">
                            <span>Embroidered Lawn Suit x1</span>
                            <span>$85.00</span>
                        </div>
                        <div className="summary-item">
                            <span>Radiance Serum x1</span>
                            <span>$100.00</span>
                        </div>
                    </div>
                    <div className="summary-totals">
                        <div className="row">
                            <span>Subtotal</span>
                            <span>$185.00</span>
                        </div>
                        <div className="row">
                            <span>Shipping</span>
                            <span>$15.00</span>
                        </div>
                        <div className="row total">
                            <span>Total</span>
                            <span>$200.00</span>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .checkout-page {
          padding-top: var(--spacing-xl);
          padding-bottom: var(--spacing-xl);
          max-width: 1000px;
          margin: 0 auto;
        }
        .checkout-header {
          text-align: center;
          margin-bottom: var(--spacing-xl);
        }
        .checkout-header h1 {
          margin-bottom: var(--spacing-md);
        }
        .progress-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-md);
          max-width: 400px;
          margin: 0 auto;
        }
        .step {
          color: var(--text-secondary);
          font-weight: 500;
        }
        .step.active {
          color: var(--accent-color);
        }
        .line {
          height: 1px;
          flex: 1;
          background: var(--border-color);
        }

        .checkout-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--spacing-xl);
        }
        @media (min-width: 768px) {
          .checkout-content { grid-template-columns: 2fr 1fr; }
        }

        .checkout-section {
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
        }
        .checkout-section h2 {
          font-size: 1.5rem;
          margin-bottom: var(--spacing-lg);
          padding-bottom: var(--spacing-sm);
          border-bottom: 1px solid var(--border-color);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-md);
        }
        .input-group {
          display: flex;
          flex-direction: column;
          margin-bottom: var(--spacing-md);
        }
        .full-width {
          grid-column: 1 / -1;
        }
        label {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-bottom: var(--spacing-xs);
        }
        input {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 0.75rem;
          border-radius: var(--radius-sm);
          font-family: inherit;
        }
        input:focus {
          outline: none;
          border-color: var(--accent-color);
          background: rgba(255, 255, 255, 0.1);
        }
        .form-btn {
          width: 100%;
          margin-top: var(--spacing-md);
        }

        .payment-options {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
        }
        .payment-radio {
          display: flex;
          align-items: center;
          cursor: pointer;
          padding: var(--spacing-md);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.02);
          transition: border-color var(--transition-fast);
        }
        .payment-radio:has(input:checked) {
          border-color: var(--accent-color);
          background: rgba(212, 175, 55, 0.05);
        }
        .payment-radio input {
          display: none;
        }
        .radio-custom {
          width: 18px;
          height: 18px;
          border: 2px solid var(--text-secondary);
          border-radius: 50%;
          margin-right: var(--spacing-md);
          position: relative;
        }
        .payment-radio input:checked + .radio-custom {
          border-color: var(--accent-color);
        }
        .payment-radio input:checked + .radio-custom::after {
          content: "";
          position: absolute;
          inset: 3px;
          background: var(--accent-color);
          border-radius: 50%;
        }

        .card-mockup {
          background: rgba(255, 255, 255, 0.02);
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          margin-bottom: var(--spacing-lg);
        }

        .checkout-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: var(--spacing-xl);
          padding-top: var(--spacing-md);
          border-top: 1px solid var(--border-color);
        }
        .back-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
        }
        .back-btn:hover {
          color: var(--text-primary);
        }
        .place-order-btn {
          min-width: 200px;
        }

        .order-summary-sidebar {
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          height: fit-content;
        }
        .order-summary-sidebar h3 {
          font-size: 1.25rem;
          margin-bottom: var(--spacing-xs);
        }
        .mb-4 { margin-bottom: 1rem; font-size: 0.875rem; }
        
        .summary-items {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-md);
          padding-bottom: var(--spacing-md);
          border-bottom: 1px solid var(--border-color);
        }
        .summary-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }
        
        .summary-totals .row {
          display: flex;
          justify-content: space-between;
          margin-bottom: var(--spacing-sm);
          color: var(--text-secondary);
        }
        .summary-totals .total {
          margin-top: var(--spacing-md);
          padding-top: var(--spacing-sm);
          border-top: 1px solid var(--border-color);
          color: var(--text-primary);
          font-weight: 700;
          font-size: 1.125rem;
        }
      `}</style>
        </div>
    );
}
