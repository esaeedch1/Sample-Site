"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { COUNTRIES } from "@/lib/countries";

export default function GlobalEntryPage() {
  const [selectedCountry, setSelectedCountry] = useState<string>("Pakistan");
  const [currencyPref, setCurrencyPref] = useState<'native' | 'USD'>('native');
  const router = useRouter();

  const handleEnterStore = () => {
    const countryObj = COUNTRIES.find(c => c.name === selectedCountry);
    localStorage.setItem('user_country', JSON.stringify(countryObj));
    localStorage.setItem('user_currency_pref', currencyPref);
    router.push("/store");
  };

  return (
    <main className="entry-container">
      <div className="entry-content glass-panel animate-fade-in">
        <h1 className="brand-title">CutiXa Adore</h1>
        <p className="tagline">Love Your Skin</p>

        <div className="selector-section">
          <p className="subtitle">Select Shipping Destination</p>
          <select
            className="country-select"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            {COUNTRIES.map(c => (
              <option key={c.code} value={c.name}>{c.name} ({c.currency})</option>
            ))}
          </select>
        </div>

        <div className="selector-section mt-6">
          <p className="subtitle">Display Prices In</p>
          <div className="currency-toggle">
            <button
              className={currencyPref === 'native' ? 'active' : ''}
              onClick={() => setCurrencyPref('native')}
            >
              Native ({COUNTRIES.find(c => c.name === selectedCountry)?.currency})
            </button>
            <button
              className={currencyPref === 'USD' ? 'active' : ''}
              onClick={() => setCurrencyPref('USD')}
            >
              USD ($)
            </button>
          </div>
        </div>

        <button className="btn-primary enter-btn mt-10" onClick={handleEnterStore}>
          Enter Store
        </button>
      </div>

      <style jsx>{`
        .entry-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at center, var(--bg-secondary) 0%, var(--bg-primary) 100%);
          padding: var(--spacing-md);
        }
        .entry-content {
          text-align: center;
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          max-width: 800px;
          width: 100%;
        }
        .brand-title {
          font-family: 'Monotype Corsiva', 'Apple Chancery', 'cursive';
          font-size: 5rem;
          margin-bottom: var(--spacing-xs);
          background: var(--gradient-gold);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .tagline {
          font-family: 'Monotype Corsiva', 'Apple Chancery', 'cursive';
          font-size: 1.5rem;
          color: var(--accent-color);
          margin-bottom: var(--spacing-md);
          letter-spacing: 0.1em;
        }
        .subtitle {
          color: var(--text-secondary);
          margin-bottom: var(--spacing-lg);
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }
        .selector-section {
          margin: 2rem 0;
        }
        .country-select {
          width: 100%;
          max-width: 400px;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-size: 1rem;
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1.25rem;
        }
        .currency-toggle {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-top: 1rem;
        }
        .currency-toggle button {
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          color: var(--text-secondary);
          transition: all 0.2s;
        }
        .currency-toggle button.active {
          border-color: var(--accent-color);
          color: var(--accent-color);
          background: rgba(212, 175, 55, 0.1);
        }
        .mt-6 { margin-top: 1.5rem; }
        .mt-10 { margin-top: 2.5rem; }
        .enter-btn {
          width: 100%;
          max-width: 300px;
          font-size: 1.125rem;
        }
      `}</style>
    </main>
  );
}
