"use client";

import { useCart } from "@/lib/CartContext";

export default function DashboardOverview() {
    return (
        <div className="dashboard-overview animate-fade-in">
            <div className="section-header mb-8">
                <h1>Overview Dashboard</h1>
                <p className="text-muted">Real-time store performance and system metrics.</p>
            </div>

            <div className="horizontal-stats">
                <div className="stat-card glass-panel flex-row">
                    <div className="stat-main">
                        <span className="stat-label">Stock Status (Numeric)</span>
                        <span className="stat-value">1,280 <small>units</small></span>
                        <span className="stat-alpha">Inventory: GOOD (Alpha)</span>
                    </div>
                    <div className="stat-graph">
                        <div className="bar-container">
                            <div className="bar" style={{ height: '80%' }}></div>
                            <div className="bar" style={{ height: '60%' }}></div>
                            <div className="bar" style={{ height: '90%' }}></div>
                            <div className="bar" style={{ height: '40%' }}></div>
                        </div>
                    </div>
                </div>

                <div className="stat-card glass-panel flex-row">
                    <div className="stat-main">
                        <span className="stat-label">Total Sales ($)</span>
                        <span className="stat-value">4.2K <small>USD</small></span>
                        <span className="stat-alpha">Performance: HIGH</span>
                    </div>
                    <div className="stat-graph">
                        <svg width="100%" height="40" viewBox="0 0 100 40" preserveAspectRatio="none">
                            <path
                                d="M0 35 Q 25 5, 50 20 T 100 10"
                                fill="none"
                                stroke="var(--accent-color)"
                                strokeWidth="3"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="dashboard-grid mt-8">
                <div className="recent-activity glass-panel">
                    <h2>Recent Activity Log</h2>
                    <ul className="activity-list">
                        <li><strong>Owner</strong> assigned <strong>Admin</strong> role to Ali Shah. <span className="time">2h ago</span></li>
                        <li><strong>Data Entry Operator</strong> updated <strong>Radiance Serum</strong> price. <span className="time">5h ago</span></li>
                        <li><strong>Manager</strong> approved 2 new <strong>Supervisor</strong> roles. <span className="time">1d ago</span></li>
                    </ul>
                </div>

                <div className="system-health glass-panel">
                    <h2>System Status</h2>
                    <div className="health-metrics">
                        <div className="metric-row">
                            <span>Payments Engine</span>
                            <span className="status-badge online">Active</span>
                        </div>
                        <div className="metric-row">
                            <span>Currency API</span>
                            <span className="status-badge online">Active</span>
                        </div>
                        <div className="metric-row">
                            <span>Inventory Sync</span>
                            <span className="status-badge warning">Pending</span>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .mb-8 { margin-bottom: 2rem; }
        .mt-8 { margin-top: 2rem; }
        
        .horizontal-stats {
          display: flex;
          overflow-x: auto;
          gap: var(--spacing-md);
          padding-bottom: 1rem;
        }
        
        .stat-card {
          flex: 1;
          min-width: 320px;
          padding: 1.5rem;
          border-radius: var(--radius-lg);
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }
        
        .stat-main { display: flex; flex-direction: column; gap: 0.25rem; flex: 1; }
        .stat-label { font-size: 0.75rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.1em; }
        .stat-value { font-size: 1.75rem; font-weight: 700; color: var(--accent-color); }
        .stat-value small { font-size: 0.875rem; opacity: 0.7; }
        .stat-alpha { font-size: 0.8rem; font-weight: 500; font-family: monospace; color: #a1a1aa; }
        
        .stat-graph { width: 80px; height: 60px; display: flex; align-items: flex-end; }
        .bar-container { display: flex; gap: 4px; align-items: flex-end; height: 100%; width: 100%; }
        .bar { flex: 1; background: var(--accent-color); border-radius: 2px 2px 0 0; opacity: 0.5; transition: height 1s; }
        .bar:hover { opacity: 1; }

        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: var(--spacing-md);
        }
        
        .recent-activity, .system-health { padding: var(--spacing-lg); border-radius: var(--radius-lg); }
        .recent-activity h2, .system-health h2 { font-size: 1.125rem; margin-bottom: var(--spacing-md); color: var(--accent-color); }
        
        .activity-list { list-style: none; display: flex; flex-direction: column; gap: var(--spacing-sm); }
        .activity-list li { 
          font-size: 0.875rem; 
          padding: 0.75rem; 
          border-left: 3px solid var(--accent-color); 
          background: rgba(255, 255, 255, 0.02); 
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
        }
        .time { float: right; color: var(--text-secondary); font-size: 0.75rem; }
        
        .health-metrics { display: flex; flex-direction: column; gap: 1rem; }
        .metric-row { display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem; }
        .status-badge { padding: 0.25rem 0.75rem; border-radius: var(--radius-full); font-size: 0.7rem; font-weight: 600; text-transform: uppercase; }
        .online { background: rgba(39, 174, 96, 0.1); color: #27ae60; }
        .warning { background: rgba(243, 156, 18, 0.1); color: #f39c12; }
      `}</style>
        </div>
    );
}
