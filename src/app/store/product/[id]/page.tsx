"use client";

import { use } from "react";
import { PRODUCTS } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/CartContext";
import { useCurrency } from "@/lib/CurrencyContext";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { addToCart } = useCart();
  const { formatPrice } = useCurrency();
  const { id } = use(params);
  const [quantity, setQuantity] = useState(1);

  const product = PRODUCTS.find(p => p.id === id);
  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const primaryCategory = product.categories[0] || 'skin-care';

  return (
    <div className="product-page container animate-fade-in">
      <Link href={`/store/category/${primaryCategory.toLowerCase()}`} className="back-link">
        ← Back to {primaryCategory}
      </Link>

      <div className="product-layout">
        <div className="product-image-section">
          <img
            src={product.images[0] || 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=600'}
            alt={product.name}
            className="main-image"
          />
        </div>

        <div className="product-details-section">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-price">{formatPrice(product.regularPrice)}</p>

          <div className="product-description text-muted">
            <p>
              {product.description || `Experience unparalleled elegance with our ${product.name}. Crafted from the finest materials to ensure premium quality and enduring style.`}
            </p>
          </div>

          <div className="add-to-cart-section">
            <div className="quantity-selector">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="qty-btn"
              >-</button>
              <span className="qty-value">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="qty-btn"
              >+</button>
            </div>

            <button className="btn-primary add-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>

          <div className="product-meta">
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>SKU:</strong> {product.sku}</p>
            <p><strong>Stock Status:</strong> {product.inStock ? `${product.stock} units available` : 'Out of Stock'}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .product-page {
          padding-top: var(--spacing-lg);
          padding-bottom: var(--spacing-xl);
        }
        .back-link {
          display: inline-block;
          color: var(--text-secondary);
          margin-bottom: var(--spacing-lg);
          text-transform: capitalize;
        }
        .back-link:hover {
          color: var(--accent-color);
        }
        .product-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--spacing-xl);
        }
        @media (min-width: 768px) {
          .product-layout { grid-template-columns: 1fr 1fr; }
        }
        .main-image {
          width: 100%;
          border-radius: var(--radius-lg);
          object-fit: cover;
          aspect-ratio: 3/4;
        }
        .product-details-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }
        .product-title {
          font-size: 2.5rem;
          margin-bottom: var(--spacing-xs);
        }
        .product-price {
          font-size: 1.5rem;
          color: var(--accent-color);
          font-weight: 600;
        }
        .product-description {
          font-size: 1.125rem;
          line-height: 1.6;
          margin: var(--spacing-md) 0;
          color: var(--text-secondary);
          padding-bottom: var(--spacing-md);
          border-bottom: 1px solid var(--border-color);
        }
        
        .add-to-cart-section {
          display: flex;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
        }
        .quantity-selector {
          display: flex;
          align-items: center;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          padding: 0.25rem;
        }
        .qty-btn {
          background: transparent;
          border: none;
          color: var(--text-primary);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          font-size: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .qty-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        .qty-value {
          width: 40px;
          text-align: center;
          font-weight: 600;
        }
        .add-btn {
          flex: 1;
        }

        .product-meta {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
          color: var(--text-secondary);
          font-size: 0.875rem;
          background: var(--bg-secondary);
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
        }
        .product-meta strong {
          color: var(--text-primary);
        }
        .capitalize {
          text-transform: capitalize;
        }
      `}</style>
    </div>
  );
}
