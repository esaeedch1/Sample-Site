"use client";

import Link from "next/link";
import { useState } from "react";
import { PRODUCTS, PRICING_MULTIPLIER } from "@/lib/data";

export default function CartPage() {
    // Mock cart data
    const [cartItems, setCartItems] = useState([
        { ...PRODUCTS[0], quantity: 1 },
        { ...PRODUCTS[3], quantity: 2 },
    ]);

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0) * PRICING_MULTIPLIER;
    const standardShipping = 15;
    const total = subtotal + standardShipping;

    const removeItem = (id: string) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <div className="cart-page container animate-fade-in">
            <h1 className="page-title">Shopping Cart</h1>

            {cartItems.length === 0 ? (
                <div className="empty-state">
                    <h2>Your cart is empty.</h2>
                    <p>Explore our collections to find something you'll love.</p>
                    <Link href="/store" className="btn-primary mt-6 inline-block">
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div className="cart-layout">
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item glass-panel">
                                <img src={item.image} alt={item.name} className="item-image" />
                                <div className="item-details">
                                    <h3><Link href={`/store/product/${item.id}`}>{item.name}</Link></h3>
                                    <p className="text-muted capitalize">Category: {item.category}</p>
                                    <p className="item-price">${(item.price * PRICING_MULTIPLIER).toFixed(2)}</p>
                                </div>
                                <div className="item-actions">
                                    <div className="qty">Qty: {item.quantity}</div>
                                    <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary glass-panel">
                        <h3>Order Summary</h3>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Standard Shipping</span>
                            <span>${standardShipping.toFixed(2)}</span>
                        </div>
                        <div className="summary-row total-row">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <Link href="/store/checkout" className="btn-primary checkout-btn">
                            Proceed to Checkout
                        </Link>
                    </div>
                </div>
            )}

            <style jsx>{`
        .cart-page {
          padding-top: var(--spacing-xl);
          padding-bottom: var(--spacing-xl);
        }
        .page-title {
          font-size: 2.5rem;
          margin-bottom: var(--spacing-xl);
          text-align: center;
        }
        .empty-state {
          text-align: center;
          padding: var(--spacing-xl);
          background: var(--bg-secondary);
          border-radius: var(--radius-lg);
        }
        .empty-state h2 { margin-bottom: var(--spacing-sm); }
        .empty-state p { color: var(--text-secondary); margin-bottom: var(--spacing-lg); }
        .mt-6 { margin-top: 1.5rem; }
        .inline-block { display: inline-block; }

        .cart-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--spacing-xl);
        }
        @media (min-width: 1024px) {
          .cart-layout { grid-template-columns: 2fr 1fr; }
        }

        .cart-items {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }
        .cart-item {
          display: flex;
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          gap: var(--spacing-lg);
        }
        .item-image {
          width: 100px;
          height: 120px;
          object-fit: cover;
          border-radius: var(--radius-sm);
        }
        .item-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }
        .item-details h3 a { transition: color var(--transition-fast); }
        .item-details h3 a:hover { color: var(--accent-color); }
        .item-price { font-weight: 600; color: var(--accent-color); }
        .capitalize { text-transform: capitalize; }
        
        .item-actions {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-end;
          min-width: 80px;
        }
        .qty { font-weight: 500; }
        .remove-btn {
          background: none;
          border: none;
          color: #e74c3c;
          font-size: 0.875rem;
          text-decoration: underline;
        }

        .cart-summary {
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          height: fit-content;
          position: sticky;
          top: 100px;
        }
        .cart-summary h3 {
          font-size: 1.5rem;
          margin-bottom: var(--spacing-md);
          padding-bottom: var(--spacing-md);
          border-bottom: 1px solid var(--border-color);
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: var(--spacing-md);
          color: var(--text-secondary);
        }
        .total-row {
          margin-top: var(--spacing-md);
          padding-top: var(--spacing-md);
          border-top: 1px solid var(--border-color);
          color: var(--text-primary);
          font-weight: 700;
          font-size: 1.25rem;
        }
        .checkout-btn {
          width: 100%;
          margin-top: var(--spacing-lg);
          display: block;
          text-align: center;
        }
      `}</style>
        </div>
    );
}
