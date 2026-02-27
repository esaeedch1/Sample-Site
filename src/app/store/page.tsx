"use client";

import Link from "next/link";
import Image from "next/image";

export default function StoreHomepage() {
  return (
    <div className="homepage animate-fade-in">
      <section className="hero">
        <div className="hero-content">
          <h1>Elegance Defined.</h1>
          <p>Discover the new arrivals in unstitched and ready-to-wear.</p>
          <div className="hero-actions">
            <Link href="/store/category/women" className="btn-primary">Shop Women</Link>
            <Link href="/store/category/men" className="btn-secondary">Shop Men</Link>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      <section className="categories-section container">
        <h2 className="section-title">Shop by Category</h2>
        <div className="category-grid">
          <Link href="/store/category/women" className="category-card">
            <div className="card-bg women-bg"></div>
            <div className="card-content glass-panel">
              <h3>Women's Collection</h3>
              <span>Explore →</span>
            </div>
          </Link>
          <Link href="/store/category/men" className="category-card">
            <div className="card-bg men-bg"></div>
            <div className="card-content glass-panel">
              <h3>Men's Collection</h3>
              <span>Explore →</span>
            </div>
          </Link>
          <Link href="/store/category/fragrances" className="category-card">
            <div className="card-bg fragrances-bg"></div>
            <div className="card-content glass-panel">
              <h3>Signature Fragrances</h3>
              <span>Explore →</span>
            </div>
          </Link>
          <Link href="/store/category/beauty" className="category-card">
            <div className="card-bg beauty-bg"></div>
            <div className="card-content glass-panel">
              <h3>Beauty & Skincare</h3>
              <span>Explore →</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="promo-section">
        <div className="container promo-content">
          <h2>Ramadan Sale</h2>
          <p>Up to 50% off on selected items.</p>
          <Link href="/store/sales" className="btn-primary">View Sale</Link>
        </div>
      </section>

      <style jsx>{`
        .homepage {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xl);
        }
        .hero {
          position: relative;
          height: 80vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: linear-gradient(rgba(10, 10, 12, 0.3), rgba(10, 10, 12, 0.8)),
                      url('/hero.png') center/cover;
        }
        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 800px;
          padding: var(--spacing-md);
        }
        .hero h1 {
          font-size: 4.5rem;
          margin-bottom: var(--spacing-md);
          background: linear-gradient(180deg, #fff, #a1a1aa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero p {
          font-size: 1.25rem;
          color: var(--text-primary);
          margin-bottom: var(--spacing-lg);
        }
        .hero-actions {
          display: flex;
          gap: var(--spacing-md);
          justify-content: center;
        }
        .btn-secondary {
          padding: 0.75rem 2rem;
          border-radius: var(--radius-full);
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          transition: all var(--transition-fast);
        }
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .section-title {
          text-align: center;
          margin-bottom: var(--spacing-xl);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-md);
        }
        .section-title::before, .section-title::after {
          content: "";
          height: 1px;
          width: 60px;
          background: var(--gradient-gold);
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: var(--spacing-md);
        }
        @media (min-width: 640px) {
          .category-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .category-grid { grid-template-columns: repeat(4, 1fr); }
        }

        .category-card {
          position: relative;
          height: 350px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          padding: var(--spacing-md);
          group: group;
        }
        .card-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease;
          z-index: 1;
        }
        .women-bg { background-image: url('/women_category.png'); }
        .men-bg { background-image: url('/men_category.png'); }
        .fragrances-bg { background-image: url('/fragrances_category.png'); }
        .beauty-bg { background-image: url('/beauty_category.png'); }
        
        .category-card:hover .card-bg {
          transform: scale(1.05);
        }
        .category-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,10,12,0.9) 0%, transparent 60%);
          z-index: 2;
        }
        .card-content {
          position: relative;
          z-index: 3;
          width: 100%;
          padding: var(--spacing-sm) var(--spacing-md);
          border-radius: var(--radius-md);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .card-content h3 {
          font-size: 1.125rem;
          margin: 0;
        }
        .card-content span {
          color: var(--accent-color);
          font-weight: 500;
          font-size: 0.875rem;
        }

        .promo-section {
          background: url('/hero.png') center/cover;
          padding: var(--spacing-xl) 0;
          text-align: center;
          position: relative;
        }
        .promo-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(10, 10, 12, 0.8);
        }
        .promo-content {
          position: relative;
          z-index: 10;
        }
        .promo-content h2 {
          font-size: 3rem;
          color: #e74c3c;
          margin-bottom: var(--spacing-sm);
        }
        .promo-content p {
          font-size: 1.25rem;
          margin-bottom: var(--spacing-lg);
        }
      `}</style>
    </div>
  );
}
