"use client";

import Link from "next/link";
import { PRODUCTS } from "@/lib/data";
import Image from "next/image";
import { useCurrency } from "@/lib/CurrencyContext";

export default function SalesPage() {
    const { formatPrice } = useCurrency();
    // For the mock, just showing the first 4 products with a discount
    const saleProducts = PRODUCTS.slice(0, 4);

    return (
        <div className="sales-page container animate-fade-in">
            <div className="page-header">
                <span className="sale-badge">Ramadan Sale</span>
                <h1>Special Offers</h1>
                <p className="subtitle">Enjoy up to 50% off on premium selections for a limited time.</p>
            </div>

            <div className="products-grid">
                {saleProducts.map((product) => {
                    const originalPrice = product.regularPrice;
                    const salePrice = product.salePrice || (originalPrice * 0.7); // Use salePrice if exists, else -30%

                    return (
                        <Link href={`/store/product/${product.id}`} key={product.id} className="product-card">
                            <div className="product-image-container">
                                <div className="discount-tag">-{Math.round((1 - (salePrice / originalPrice)) * 100)}%</div>
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="product-image"
                                />
                                <div className="product-overlay">
                                    <span className="btn-primary overlay-btn">View Details</span>
                                </div>
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <div className="price-container">
                                    <span className="original-price">{formatPrice(originalPrice)}</span>
                                    <span className="sale-price">{formatPrice(salePrice)}</span>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>

            <style jsx>{`
                .sales-page {
                    padding-top: var(--spacing-xl);
                    padding-bottom: var(--spacing-xl);
                }
                .page-header {
                    text-align: center;
                    margin-bottom: var(--spacing-xl);
                }
                .sale-badge {
                    display: inline-block;
                    background: rgba(231, 76, 60, 0.1);
                    color: #e74c3c;
                    padding: 0.25rem 1rem;
                    border-radius: var(--radius-full);
                    border: 1px solid rgba(231, 76, 60, 0.2);
                    font-size: 0.875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: var(--spacing-md);
                }
                .subtitle {
                    color: var(--text-secondary);
                    margin-top: var(--spacing-sm);
                }

                .products-grid {
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    gap: var(--spacing-lg);
                }
                @media (min-width: 640px) {
                    .products-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (min-width: 1024px) {
                    .products-grid { grid-template-columns: repeat(4, 1fr); }
                }

                .product-card {
                    display: flex;
                    flex-direction: column;
                    border-radius: var(--radius-md);
                    overflow: hidden;
                    background: var(--bg-secondary);
                    border: 1px solid transparent;
                    transition: border-color var(--transition-fast);
                }
                .product-card:hover {
                    border-color: rgba(231, 76, 60, 0.3);
                }
                .product-image-container {
                    position: relative;
                    aspect-ratio: 3/4;
                    overflow: hidden;
                }
                .discount-tag {
                    position: absolute;
                    top: var(--spacing-sm);
                    left: var(--spacing-sm);
                    background: #e74c3c;
                    color: white;
                    padding: 0.25rem 0.5rem;
                    border-radius: var(--radius-sm);
                    font-size: 0.75rem;
                    font-weight: 700;
                    z-index: 10;
                }
                .product-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
                .product-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(10, 10, 12, 0.4);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity var(--transition-fast);
                }
                .product-card:hover .product-image {
                    transform: scale(1.05);
                }
                .product-card:hover .product-overlay {
                    opacity: 1;
                }
                .overlay-btn {
                    transform: translateY(20px);
                    font-size: 0.875rem;
                    padding: 0.5rem 1.5rem;
                }
                .product-card:hover .overlay-btn {
                    transform: translateY(0);
                }

                .product-info {
                    padding: var(--spacing-md);
                    text-align: center;
                }
                .product-info h3 {
                    font-size: 1rem;
                    font-weight: 500;
                    margin-bottom: var(--spacing-xs);
                }
                .price-container {
                    display: flex;
                    gap: var(--spacing-sm);
                    justify-content: center;
                    align-items: center;
                }
                .original-price {
                    color: var(--text-secondary);
                    text-decoration: line-through;
                    font-size: 0.875rem;
                }
                .sale-price {
                    color: #e74c3c;
                    font-weight: 600;
                    font-size: 1.125rem;
                }
            `}</style>
        </div>
    );
}
