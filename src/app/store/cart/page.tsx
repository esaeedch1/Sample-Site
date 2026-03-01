"use client";

import Link from "next/link";
import { useCurrency } from "@/lib/CurrencyContext";
import { useCart } from "@/lib/CartContext";

export default function CartPage() {
  const { formatPrice } = useCurrency();
  const { cart, removeFromCart } = useCart();

  const subtotal = cart.reduce((acc, item) => acc + (item.regularPrice * item.quantity), 0);
  const standardShipping = cart.length > 0 ? 15 : 0;
  const total = subtotal + standardShipping;

  const removeItem = (id: string) => {
    removeFromCart(id);
  };

  return (
    <div className="cart-page container animate-fade-in">
      <h1 className="page-title">Shopping Cart</h1>

      {cart.length === 0 ? (
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
            {cart.map((item) => (
              <div key={item.id} className="cart-item glass-panel">
                <img src={item.images[0]} alt={item.name} className="item-image" />
                <div className="item-details">
                  <h3><Link href={`/store/product/${item.id}`}>{item.name}</Link></h3>
                  <p className="text-muted capitalize">Brand: {item.brand}</p>
                  <p className="item-price">{formatPrice(item.regularPrice)}</p>
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
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="summary-row">
              <span>Standard Shipping</span>
              <span>{formatPrice(standardShipping)}</span>
            </div>
            <div className="summary-row total-row">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            <Link href="/store/checkout" className="btn-primary checkout-btn">
              Proceed to Checkout
            </Link>
            <Link href="/store" className="continue-link">
              ← Continue Shopping
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        .continue-link {
          display: block;
          text-align: center;
          margin-top: 1rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }
        .continue-link:hover { color: var(--accent-color); }
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
