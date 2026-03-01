"use client";

import { useCart } from "@/lib/CartContext";
import { useCurrency } from "@/lib/CurrencyContext";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const { formatPrice } = useCurrency();
  const [orderStep, setOrderStep] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [activeMethods, setActiveMethods] = useState<any[]>([]);
  const [receiverDetails, setReceiverDetails] = useState<any>({ bank: null, crypto: null });

  const subtotal = cart.reduce((acc, item) => acc + (item.regularPrice * item.quantity), 0);
  const shipping = cart.length > 0 ? 15 : 0;
  const total = subtotal + shipping;

  useEffect(() => {
    // Load dynamic settings from owner dashboard
    const methods = localStorage.getItem('active_payment_methods');
    const bank = localStorage.getItem('receiver_bank_details');
    const crypto = localStorage.getItem('receiver_crypto_details');

    if (methods) {
      const parsed = JSON.parse(methods);
      const filtered = parsed.filter((m: any) => m.active);
      setActiveMethods(filtered);
      if (filtered.length > 0) setSelectedPayment(filtered[0].id);
    } else {
      // Fallbacks if nothing saved yet
      const defaultMethods = [
        { id: "sadapay", name: "SadaPay / EasyPaisa", active: true },
        { id: "jazzcash", name: "JazzCash", active: true },
        { id: "crypto", name: "Cryptocurrency", active: true },
        { id: "cod", name: "Cash on Delivery", active: true }
      ];
      setActiveMethods(defaultMethods);
      setSelectedPayment("sadapay");
    }

    setReceiverDetails({
      bank: bank ? JSON.parse(bank) : { bankName: "HBL", accountTitle: "CutiXa Adore", iban: "PK0012345678" },
      crypto: crypto ? JSON.parse(crypto) : { walletAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F", network: "TRC20" }
    });
  }, []);

  const handlePlaceOrder = () => {
    setOrderStep(3);
    clearCart();
  };

  const currentMethodName = activeMethods.find(m => m.id === selectedPayment)?.name || "";

  if (orderStep === 3) {
    return (
      <div className="checkout-success container text-center">
        <div className="success-card glass-panel">
          <div className="success-icon">✓</div>
          <h1>Order Placed Successfully!</h1>
          <p>Thank you for shopping with CutiXa Adore. Your order is being processed.</p>
          <Link href="/store" className="btn-primary mt-6 inline-block">Back to Shop</Link>
        </div>
        <style jsx>{`
                    .checkout-success { padding: 4rem 1rem; }
                    .success-card { padding: 3rem; border-radius: var(--radius-lg); max-width: 600px; margin: 0 auto; }
                    .success-icon { 
                        font-size: 4rem; 
                        color: #27ae60; 
                        background: rgba(39, 174, 96, 0.1); 
                        width: 100px; 
                        height: 100px; 
                        line-height: 100px; 
                        border-radius: 50%; 
                        margin: 0 auto 2rem;
                    }
                    h1 { margin-bottom: 1rem; }
                    p { color: var(--text-secondary); }
                    .mt-6 { margin-top: 1.5rem; }
                    .inline-block { display: inline-block; }
                `}</style>
      </div>
    );
  }

  return (
    <div className="checkout-page container">
      <h1 className="page-title">Checkout</h1>

      <div className="checkout-layout">
        <div className="checkout-main">
          <section className="checkout-section glass-panel">
            <div className="section-header">
              <span className="step-num">1</span>
              <h2>Shipping Details</h2>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" />
              </div>
              <div className="form-group span-2">
                <label>Shipping Address</label>
                <textarea placeholder="123 Street Name, City, Country" rows={3} />
              </div>
            </div>
          </section>

          <section className="checkout-section glass-panel mt-6">
            <div className="section-header">
              <span className="step-num">2</span>
              <h2>Payment Method</h2>
            </div>
            <div className="payment-options">
              {activeMethods.map(method => (
                <div
                  key={method.id}
                  className={`payment-card ${selectedPayment === method.id ? 'active' : ''}`}
                  onClick={() => setSelectedPayment(method.id)}
                >
                  <div className="p-radio"></div>
                  <span>{method.name}</span>
                </div>
              ))}
            </div>

            {selectedPayment !== 'cod' && selectedPayment !== '' && (
              <div className="payment-transfer-details glass-panel mt-6">
                <div className="qr-container">
                  <div className="qr-box">
                    <div className="qr-sim">
                      {/* Visual representation of a QR code based on amount and selected method */}
                      <div className="qr-pattern"></div>
                      <span className="qr-label">SCAN TO PAY</span>
                    </div>
                    <div className="qr-amount-badge">
                      {formatPrice(total)}
                    </div>
                  </div>
                </div>

                <div className="transfer-info">
                  <h3>Pay via {currentMethodName}</h3>
                  {selectedPayment === 'crypto' ? (
                    <div className="info-list">
                      <p><strong>Wallet Address:</strong><br /><code className="address-code">{receiverDetails.crypto.walletAddress}</code></p>
                      <p><strong>Network:</strong> {receiverDetails.crypto.network}</p>
                    </div>
                  ) : (
                    <div className="info-list">
                      <p><strong>Bank:</strong> {receiverDetails.bank.bankName}</p>
                      <p><strong>Account Title:</strong> {receiverDetails.bank.accountTitle}</p>
                      <p><strong>IBAN:</strong><br /><code className="address-code">{receiverDetails.bank.iban}</code></p>
                    </div>
                  )}
                  <div className="payment-tip mt-4">
                    <p className="text-muted text-xs">Please upload the screenshot of the transaction after payment is successful.</p>
                    <input type="file" className="mt-2 text-xs" />
                  </div>
                </div>
              </div>
            )}

            {selectedPayment === 'cod' && (
              <div className="cod-info mt-4 glass-panel">
                <p>Pay with cash when your order is delivered to your doorstep.</p>
              </div>
            )}
          </section>
        </div>

        <div className="checkout-side">
          <div className="order-review glass-panel">
            <h3>Order Review</h3>
            <div className="review-items">
              {cart.map(item => (
                <div key={item.id} className="review-item">
                  <span>{item.name} x {item.quantity}</span>
                  <span>{formatPrice(item.regularPrice * item.quantity)}</span>
                </div>
              ))}
            </div>
            <div className="review-summary">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>{formatPrice(shipping)}</span>
              </div>
              <div className="summary-row total-row">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
            <button className="btn-primary w-full mt-4" onClick={handlePlaceOrder}>
              Complete Order
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
                .checkout-page { padding: 3rem 1rem; }
                .page-title { margin-bottom: 2rem; }
                .checkout-layout { display: grid; grid-template-columns: 1fr; gap: 2rem; }
                @media (min-width: 1024px) {
                    .checkout-layout { grid-template-columns: 2fr 1fr; }
                }
                .checkout-section { padding: 2rem; border-radius: var(--radius-lg); }
                .section-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem; }
                .step-num { 
                    background: var(--accent-color); 
                    color: black; 
                    width: 32px; 
                    height: 32px; 
                    border-radius: 50%; 
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                    font-weight: 700;
                }
                .form-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
                @media (min-width: 640px) {
                    .form-grid { grid-template-columns: 1fr 1fr; }
                    .span-2 { grid-column: span 2; }
                }
                .form-group { display: flex; flex-direction: column; gap: 0.5rem; }
                .form-group label { font-size: 0.875rem; color: var(--text-secondary); }
                .form-group input, .form-group textarea {
                    background: var(--bg-tertiary);
                    border: 1px solid var(--border-color);
                    padding: 0.875rem;
                    border-radius: var(--radius-md);
                    color: white;
                }
                .payment-options { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; }
                .payment-card { 
                    padding: 1.5rem; 
                    border-radius: var(--radius-md); 
                    border: 1px solid var(--border-color); 
                    display: flex; 
                    align-items: center; 
                    gap: 1rem; 
                    cursor: pointer; 
                    transition: all 0.2s;
                    background: rgba(255, 255, 255, 0.02);
                }
                .payment-card:hover { background: rgba(255, 255, 255, 0.05); }
                .payment-card.active { border-color: var(--accent-color); background: rgba(212, 175, 55, 0.1); }
                .p-radio { 
                    width: 20px; 
                    height: 20px; 
                    border-radius: 50%; 
                    border: 2px solid var(--border-color); 
                    position: relative;
                }
                .payment-card.active .p-radio { border-color: var(--accent-color); }
                .payment-card.active .p-radio:after {
                    content: '';
                    position: absolute;
                    inset: 3px;
                    background: var(--accent-color);
                    border-radius: 50%;
                }
                .order-review { padding: 2rem; border-radius: var(--radius-lg); position: sticky; top: 100px; }
                .review-items { margin-bottom: 2rem; }
                .review-item { display: flex; justify-content: space-between; font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 0.5rem; }
                .review-summary { border-top: 1px solid var(--border-color); padding-top: 1rem; }
                .summary-row { display: flex; justify-content: space-between; margin-bottom: 0.75rem; }
                .total-row { font-weight: 700; color: white; border-top: 1px solid var(--border-color); padding-top: 1rem; font-size: 1.25rem; }
                .w-full { width: 100%; }
                
                .payment-transfer-details {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                    padding: 2rem;
                    background: rgba(212, 175, 55, 0.03);
                }
                @media (min-width: 640px) {
                    .payment-transfer-details { grid-template-columns: 200px 1fr; }
                }

                .qr-container { display: flex; justify-content: center; }
                .qr-box { 
                    background: white; 
                    padding: 1rem; 
                    border-radius: var(--radius-md); 
                    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                    position: relative;
                }
                .qr-sim {
                    width: 150px;
                    height: 150px;
                    background: #eee;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                }
                .qr-pattern {
                    width: 100%;
                    height: 100%;
                    background-image: radial-gradient(#000 20%, transparent 20%), radial-gradient(#000 20%, transparent 20%);
                    background-position: 0 0, 8px 8px;
                    background-size: 16px 16px;
                    opacity: 0.8;
                }
                .qr-label {
                    position: absolute;
                    background: white;
                    color: black;
                    padding: 0.25rem 0.5rem;
                    font-size: 0.6rem;
                    font-weight: 800;
                    letter-spacing: 0.1em;
                }
                .qr-amount-badge {
                    position: absolute;
                    bottom: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: var(--accent-color);
                    color: black;
                    padding: 0.3rem 1rem;
                    border-radius: var(--radius-full);
                    font-size: 0.75rem;
                    font-weight: 700;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
                    white-space: nowrap;
                }

                .transfer-info h3 { margin-bottom: 1rem; font-size: 1.25rem; }
                .info-list p { margin-bottom: 0.75rem; font-size: 0.9rem; }
                .address-code {
                    background: rgba(255, 255, 255, 0.05);
                    padding: 0.4rem 0.75rem;
                    border-radius: 4px;
                    font-size: 0.8rem;
                    word-break: break-all;
                    display: inline-block;
                    margin-top: 0.25rem;
                    border: 1px dashed var(--border-color);
                    color: var(--accent-color);
                }
                .cod-info { padding: 1.5rem; color: var(--text-secondary); font-size: 0.9rem; }
                .text-xs { font-size: 0.75rem; }
                .mt-4 { margin-top: 1rem; }
                .mt-6 { margin-top: 1.5rem; }
            `}</style>
    </div>
  );
}
