"use client";

import { useState, useEffect } from "react";

export default function ContentManagement() {
    const [settings, setSettings] = useState({
        showHero: true,
        showCategories: true,
        showPromo: true,
        showNewArrivals: true,
        promoText: "Ramadan Sale",
        heroTitle: "Skin Care",
        heroSubtitle: "Discover the new arrivals in unstitched and ready-to-wear.",
        showComingSoon: true,
        comingSoonMessage: "Coming Soon....",
        liveEditMode: false
    });

    useEffect(() => {
        const saved = localStorage.getItem('homepage_settings');
        if (saved) setSettings(JSON.parse(saved));
    }, []);

    const handleSave = () => {
        localStorage.setItem('homepage_settings', JSON.stringify(settings));
        localStorage.setItem('cutixa_live_edit', settings.liveEditMode ? 'true' : 'false');
        alert("Settings updated successfully! Live Edit Mode is now " + (settings.liveEditMode ? "ENABLED" : "DISABLED"));
    };

    return (
        <div className="content-mgmt-page glass-panel animate-fade-in">
            <div className="page-header">
                <h1>Store Management & Content</h1>
                <p className="text-muted">Owner and Admin only: Toggle sections, edit text, and enable Live Edit Mode.</p>
                <button className="btn-primary" onClick={handleSave}>Save Changes</button>
            </div>

            <div className="settings-grid">
                <section className="settings-card glass-panel">
                    <h2>Live Editor & Global</h2>
                    <p className="text-secondary mb-4">Enable "Live Edit" to see edit icons directly on the storefront.</p>
                    <div className="toggle-item">
                        <label>Live Edit Mode</label>
                        <input
                            type="checkbox"
                            checked={settings.liveEditMode}
                            onChange={(e) => setSettings({ ...settings, liveEditMode: e.target.checked })}
                        />
                    </div>
                </section>

                <section className="settings-card glass-panel">
                    <h2>Visibility Control</h2>
                    <div className="toggle-list">
                        <div className="toggle-item">
                            <label>Hero Section</label>
                            <input
                                type="checkbox"
                                checked={settings.showHero}
                                onChange={(e) => setSettings({ ...settings, showHero: e.target.checked })}
                            />
                        </div>
                        <div className="toggle-item">
                            <label>Category Grid</label>
                            <input
                                type="checkbox"
                                checked={settings.showCategories}
                                onChange={(e) => setSettings({ ...settings, showCategories: e.target.checked })}
                            />
                        </div>
                        <div className="toggle-item">
                            <label>Promo Section</label>
                            <input
                                type="checkbox"
                                checked={settings.showPromo}
                                onChange={(e) => setSettings({ ...settings, showPromo: e.target.checked })}
                            />
                        </div>
                        <div className="toggle-item">
                            <label>New Arrivals</label>
                            <input
                                type="checkbox"
                                checked={settings.showNewArrivals}
                                onChange={(e) => setSettings({ ...settings, showNewArrivals: e.target.checked })}
                            />
                        </div>
                    </div>
                </section>

                <section className="settings-card glass-panel">
                    <h2>Hero Content</h2>
                    <div className="input-group">
                        <label>Title</label>
                        <input
                            type="text"
                            value={settings.heroTitle}
                            onChange={(e) => setSettings({ ...settings, heroTitle: e.target.value })}
                        />
                    </div>
                    <div className="input-group">
                        <label>Subtitle</label>
                        <textarea
                            value={settings.heroSubtitle}
                            onChange={(e) => setSettings({ ...settings, heroSubtitle: e.target.value })}
                            rows={3}
                        />
                    </div>
                </section>

                <section className="settings-card glass-panel">
                    <h2>Promotional Content</h2>
                    <div className="input-group">
                        <label>Promo Text</label>
                        <input
                            type="text"
                            value={settings.promoText}
                            onChange={(e) => setSettings({ ...settings, promoText: e.target.value })}
                        />
                    </div>
                </section>

                <section className="settings-card glass-panel">
                    <h2>Coming Soon Settings (404 Pages)</h2>
                    <div className="toggle-item mb-4">
                        <label>Enable Coming Soon for 404s</label>
                        <input
                            type="checkbox"
                            checked={settings.showComingSoon}
                            onChange={(e) => setSettings({ ...settings, showComingSoon: e.target.checked })}
                        />
                    </div>
                    <div className="input-group">
                        <label>Custom Message</label>
                        <input
                            type="text"
                            value={settings.comingSoonMessage}
                            onChange={(e) => setSettings({ ...settings, comingSoonMessage: e.target.value })}
                        />
                    </div>
                </section>
            </div>

            <style jsx>{`
        .content-mgmt-page { padding: 2rem; border-radius: 1rem; }
        .page-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem; }
        .settings-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 1.5rem; }
        .settings-card { padding: 1.5rem; border-radius: 0.75rem; border: 1px solid var(--border-color); }
        .settings-card h2 { font-size: 1.125rem; margin-bottom: 1.5rem; color: var(--accent-color); border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; }
        
        .toggle-list { display: flex; flex-direction: column; gap: 1rem; }
        .toggle-item { display: flex; justify-content: space-between; align-items: center; }
        
        .input-group { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem; }
        .input-group label { font-size: 0.875rem; color: var(--text-secondary); }
        .input-group input, .input-group textarea {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 0.75rem;
          border-radius: var(--radius-md);
          font-family: inherit;
        }

        .btn-primary { 
          background: var(--accent-color); 
          color: black; 
          padding: 0.75rem 1.5rem; 
          border-radius: var(--radius-full); 
          font-weight: 600; 
          border: none;
          cursor: pointer;
        }
      `}</style>
        </div>
    );
}
