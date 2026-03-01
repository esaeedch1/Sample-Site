"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/lib/data";
import { useCurrency } from "@/lib/CurrencyContext";

export default function StoreHomepage() {
  const { formatPrice } = useCurrency();
  const [settings, setSettings] = useState({
    showHero: true,
    showCategories: true,
    showPromo: true,
    showNewArrivals: true,
    promoText: "Ramadan Sale",
    heroTitle: "Skin Care",
    heroSubtitle: "Discover the new arrivals in unstitched and ready-to-wear.",
    liveEditMode: false
  });

  useEffect(() => {
    const saved = localStorage.getItem('homepage_settings');
    const liveEdit = localStorage.getItem('cutixa_live_edit') === 'true';
    if (saved) {
      setSettings({ ...JSON.parse(saved), liveEditMode: liveEdit });
    } else {
      setSettings(prev => ({ ...prev, liveEditMode: liveEdit }));
    }
  }, []);

  const EditBadge = ({ target = "content" }) => (
    settings.liveEditMode ? (
      <Link href={`/dashboard/${target}`} className="edit-badge">
        <span className="edit-icon">✎</span> Edit Section
      </Link>
    ) : null
  );

  return (
    <div className="homepage animate-fade-in">
      {settings.showHero && (
        <section className="hero">
          <EditBadge />
          <div className="hero-content">
            <h1>{settings.heroTitle}</h1>
            <p>{settings.heroSubtitle}</p>
            <div className="hero-actions">
              <Link href="/store/category/serums" className="btn-primary">Shop Serums</Link>
              <Link href="/store/category/beauty-kits" className="btn-secondary">Beauty Kits</Link>
            </div>
          </div>
          <div className="hero-overlay"></div>
        </section>
      )}

      {settings.showCategories && (
        <section className="categories-section container">
          <EditBadge />
          <h2 className="section-title">Skin Care Categories</h2>
          <div className="category-grid">
            <Link href="/store/category/extracts" className="category-card">
              <div className="card-bg extracts-bg"></div>
              <div className="card-content glass-panel">
                <h3>Extracts</h3>
                <span>Explore →</span>
              </div>
            </Link>
            <Link href="/store/category/tonner" className="category-card">
              <div className="card-bg tonner-bg"></div>
              <div className="card-content glass-panel">
                <h3>Tonners</h3>
                <span>Explore →</span>
              </div>
            </Link>
            <Link href="/store/category/creams" className="category-card">
              <div className="card-bg creams-bg"></div>
              <div className="card-content glass-panel">
                <h3>Creams</h3>
                <span>Explore →</span>
              </div>
            </Link>
            <Link href="/store/category/beauty-kits" className="category-card">
              <div className="card-bg kits-bg"></div>
              <div className="card-content glass-panel">
                <h3>Beauty Kits</h3>
                <span>Explore →</span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {settings.showPromo && (
        <section className="promo-section">
          <EditBadge />
          <div className="container promo-content">
            <h2>{settings.promoText}</h2>
            <p>Up to 50% off on selected items.</p>
            <Link href="/store/sales" className="btn-primary">View Sale</Link>
          </div>
        </section>
      )}

      {settings.showNewArrivals && (
        <section className="new-arrivals container">
          <EditBadge target="products" />
          <h2 className="section-title">New Arrivals</h2>
          <div className="products-grid">
            {PRODUCTS.map(product => (
              <Link href={`/store/product/${product.id}`} key={product.id} className="product-card glass-panel">
                <div className="product-image">
                  <img src={product.images[0]} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="price">{formatPrice(product.regularPrice)}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <style jsx>{`
        .homepage {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xl);
          position: relative;
        }
        .edit-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: var(--accent-color);
          color: black;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-weight: 700;
          z-index: 100;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.5);
          transition: all 0.2s;
        }
        .edit-badge:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
        .hero, .categories-section, .promo-section, .new-arrivals {
          position: relative;
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
        .extracts-bg { background-image: url('https://images.unsplash.com/photo-1601055283431-7137f4f8d7f3?auto=format&fit=crop&q=80&w=600'); }
        .tonner-bg { background-image: url('https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=600'); }
        .creams-bg { background-image: url('https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600'); }
        .kits-bg { background-image: url('https://images.unsplash.com/photo-1512496011931-d21d8fa92196?auto=format&fit=crop&q=80&w=600'); }
        
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
        .products-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: var(--spacing-lg);
          margin-top: 1rem;
        }
        @media (min-width: 640px) {
          .products-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .products-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .product-card {
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          transition: all 0.3s ease;
          display: block;
        }
        .product-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--accent-color);
        }
        .product-image img {
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
          border-radius: var(--radius-md);
          margin-bottom: 1rem;
        }
        .product-info h3 {
          font-size: 1rem;
          margin: 0 0 0.5rem 0;
          color: var(--text-primary);
        }
        .product-info .price {
          color: var(--accent-color);
          font-weight: 600;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
