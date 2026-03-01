"use client";

import { useCart } from "@/lib/CartContext";

export default function DashboardOverview() {
    return (
        <div className="dashboard-overview">
            <div className="stats-grid">
                <div className="stat-card glass-panel animate-fade-in">
                    <span className="stat-label">Total Products</span>
                    <span className="stat-value">12</span>
                    <span className="stat-trend">+2 recently added</span>
                </div>
                <div className="stat-card glass-panel animate-fade-in">
                    <span className="stat-label">Active Users</span>
                    <span className="stat-value">5</span>
                    <span className="stat-trend">Manage roles now</span>
                </div>
                <div className="stat-card glass-panel animate-fade-in">
                    <span className="stat-label">Pending Orders</span>
                    <span className="stat-value">3</span>
                    <span className="stat-trend">Needs salesman review</span>
                </div>
                <div className="stat-card glass-panel animate-fade-in">
                    <span className="stat-label">Payment Methods</span>
                    <span className="stat-value">5</span>
                    <span className="stat-trend">JazzCash, SadaPay, etc.</span>
                </div>
            </div>

            <div className="recent-activity glass-panel mt-8">
                <h2>Recent Activity</h2>
                <ul className="activity-list">
                    <li><strong>Owner</strong> assigned <strong>Admin</strong> role to Ali Shah. <span className="time">2h ago</span></li>
                    <li><strong>Data Entry Operator</strong> updated <strong>Radiance Serum</strong> price. <span className="time">5h ago</span></li>
                    <li><strong>Manager</strong> approved 2 new <strong>Supervisor</strong> roles. <span className="time">1d ago</span></li>
                </ul>
            </div>

            <style jsx>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--spacing-md);
        }
        .stat-card {
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }
        .stat-label { font-size: 0.875rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.1em; }
        .stat-value { font-size: 2.25rem; font-weight: 700; color: var(--accent-color); }
        .stat-trend { font-size: 0.75rem; color: #27ae60; }
        
        .mt-8 { margin-top: 2rem; }
        .recent-activity { padding: var(--spacing-lg); border-radius: var(--radius-lg); }
        .recent-activity h2 { font-size: 1.25rem; margin-bottom: var(--spacing-md); }
        .activity-list { list-style: none; display: flex; flex-direction: column; gap: var(--spacing-sm); }
        .activity-list li { 
          font-size: 0.875rem; 
          padding: 0.5rem; 
          border-left: 2px solid var(--accent-color); 
          background: rgba(255, 255, 255, 0.02); 
        }
        .time { float: right; color: var(--text-secondary); font-size: 0.75rem; }
      `}</style>
        </div>
    );
}
