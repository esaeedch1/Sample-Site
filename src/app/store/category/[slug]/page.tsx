"use client";

import Link from "next/link";
import { PRODUCTS } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { use } from "react";
import { useCurrency } from "@/lib/CurrencyContext";

// A small map for friendly category names
const categoryNames: Record<string, string> = {
  extracts: "Skin Extracts",
  serums: "Concentrated Serums",
  "beauty-kits": "Beauty Kits & Bundles",
  "hair-care": "Hair Care Collection",
  creams: "Premium Creams",
  lotions: "Hydrating Lotions",
  cleanser: "Facial Cleansers",
  tonner: "Skin Toners",
  lipsticks: "Luxury Lipsticks",
  "facial-care": "Facial Skin Care",
  "skin-care": "Total Skin Care"
};

export default function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params);
  const { formatPrice } = useCurrency();

  // Normalize slug for matching (e.g., 'beauty-kits' -> 'Beauty Kits')
  const displaySlug = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const categoryProducts = PRODUCTS.filter(p =>
    p.categories.some(c => c.toLowerCase() === displaySlug.toLowerCase()) ||
    p.categories.some(c => c.toLowerCase() === slug.toLowerCase())
  );

  const pageTitle = categoryNames[slug] || `${displaySlug} Collection`;

  return (
    <div className="category-page container animate-fade-in">
      <div className="page-header">
        <h1>{pageTitle}</h1>
        <p className="subtitle">Explore our exclusive range of {displaySlug}.</p>
      </div>

      {categoryProducts.length === 0 ? (
        <div className="empty-state">
          <p>No products found in "{displaySlug}" category.</p>
          <Link href="/store" className="btn-primary mt-4 inline-block">Back to Shop</Link>
        </div>
      ) : (
        <div className="products-grid">
          {categoryProducts.map((product) => (
            <Link href={`/store/product/${product.id}`} key={product.id} className="product-card">
              <div className="product-image-container">
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
                <p className="price">{formatPrice(product.regularPrice)}</p>
              </div>
            </Link>
          ))}
        </div>
      )}

      <style jsx>{`
        .category-page {
          padding-top: var(--spacing-xl);
          padding-bottom: var(--spacing-xl);
        }
        .page-header {
          text-align: center;
          margin-bottom: var(--spacing-xl);
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
          .products-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 1280px) {
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
          border-color: rgba(212, 175, 55, 0.3);
        }
        .product-image-container {
          position: relative;
          aspect-ratio: 3/4;
          overflow: hidden;
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
        .price {
          color: var(--accent-color);
          font-weight: 600;
        }
        .empty-state {
          text-align: center;
          padding: var(--spacing-xl);
          color: var(--text-secondary);
          background: var(--bg-secondary);
          border-radius: var(--radius-lg);
        }
      `}</style>
    </div>
  );
}
