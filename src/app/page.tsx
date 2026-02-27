"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const COUNTRIES = [
  "Pakistan",
  "Australia",
  "New Zealand",
  "United Kingdom",
  "United States",
  "Canada",
  "South Africa",
  "Bangladesh",
  "Rest of the World",
];

export default function GlobalEntryPage() {
  const [selectedCountry, setSelectedCountry] = useState<string>("Pakistan");
  const router = useRouter();

  const handleEnterStore = () => {
    // Basic navigation, could save country to cookies/localStorage here
    router.push("/store");
  };

  return (
    <main className="entry-container">
      <div className="entry-content glass-panel animate-fade-in">
        <h1 className="brand-title">SAMPLE BRAND</h1>
        <p className="subtitle">Select your shipping destination</p>

        <div className="country-grid">
          {COUNTRIES.map((country) => (
            <button
              key={country}
              className={`country-btn ${selectedCountry === country ? "selected" : ""}`}
              onClick={() => setSelectedCountry(country)}
            >
              {country}
            </button>
          ))}
        </div>

        <button className="btn-primary enter-btn" onClick={handleEnterStore}>
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
          font-size: 4rem;
          margin-bottom: var(--spacing-xs);
          background: var(--gradient-gold);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .subtitle {
          color: var(--text-secondary);
          margin-bottom: var(--spacing-lg);
          font-size: 1.125rem;
        }
        .country-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-xl);
        }
        .country-btn {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }
        .country-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(212, 175, 55, 0.5); /* Gold tint */
        }
        .country-btn.selected {
          border-color: var(--accent-color);
          background: rgba(212, 175, 55, 0.1);
        }
        .enter-btn {
          width: 100%;
          max-width: 300px;
          font-size: 1.125rem;
        }
      `}</style>
    </main>
  );
}
