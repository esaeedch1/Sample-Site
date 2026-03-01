"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function NotFound() {
    const [settings, setSettings] = useState({
        comingSoonMessage: "Coming Soon....",
        showComingSoon: true
    });

    useEffect(() => {
        const saved = localStorage.getItem('homepage_settings');
        if (saved) {
            const parsed = JSON.parse(saved);
            setSettings({
                comingSoonMessage: parsed.comingSoonMessage || "Coming Soon....",
                showComingSoon: parsed.showComingSoon !== undefined ? parsed.showComingSoon : true
            });
        }
    }, []);

    if (!settings.showComingSoon) {
        return (
            <div className="not-found glass-panel">
                <h1>404</h1>
                <p>Page Not Found</p>
                <Link href="/store" className="btn-primary">Back to Store</Link>
                <style jsx>{`
          .not-found { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; text-align: center; gap: 1rem; }
          h1 { font-size: 4rem; color: var(--accent-color); }
        `}</style>
            </div>
        );
    }

    return (
        <div className="coming-soon glass-panel animate-fade-in">
            <h1 className="brand-title">CutiXa Adore</h1>
            <p className="message">{settings.comingSoonMessage}</p>
            <Link href="/store" className="btn-secondary">Explore Existing Products</Link>

            <style jsx>{`
        .coming-soon {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem;
        }
        .brand-title {
          font-family: 'Monotype Corsiva', cursive;
          font-size: 4rem;
          background: var(--gradient-gold);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }
        .message {
          font-size: 1.5rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          letter-spacing: 0.1em;
        }
      `}</style>
        </div>
    );
}
