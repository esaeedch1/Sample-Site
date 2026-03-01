"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
    const [method, setMethod] = useState<'email' | 'mobile'>('email');

    return (
        <div className="login-container animate-fade-in">
            <div className="login-card glass-panel">
                <div className="login-header">
                    <h1>CutiXa Adore</h1>
                    <p className="text-muted">Sign in to your account</p>
                </div>

                <div className="login-tabs">
                    <button
                        className={method === 'email' ? 'active' : ''}
                        onClick={() => setMethod('email')}
                    >
                        Email Login
                    </button>
                    <button
                        className={method === 'mobile' ? 'active' : ''}
                        onClick={() => setMethod('mobile')}
                    >
                        Mobile Login
                    </button>
                </div>

                {method === 'email' ? (
                    <form className="login-form">
                        <div className="input-field">
                            <label>Email Address</label>
                            <input type="email" placeholder="name@example.com" required />
                        </div>
                        <div className="input-field">
                            <label>Password</label>
                            <input type="password" placeholder="••••••••" required />
                        </div>
                        <button type="submit" className="btn-primary w-full mt-4">Login</button>
                    </form>
                ) : (
                    <form className="login-form">
                        <div className="input-field">
                            <label>Mobile Number</label>
                            <div className="mobile-input">
                                <span>+92</span>
                                <input type="tel" placeholder="300 0000000" required />
                            </div>
                        </div>
                        <p className="text-xs text-muted mb-4 text-center">We will send you a 4-digit OTP code.</p>
                        <button type="submit" className="btn-primary w-full">Send OTP</button>
                    </form>
                )}

                <div className="divider">
                    <span>OR CONTINUE WITH</span>
                </div>

                <div className="social-login-grid">
                    <button className="social-btn google-btn">
                        <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" />
                        Google
                    </button>
                    <button className="social-btn facebook-btn">
                        <img src="https://img.icons8.com/color/48/facebook-new.png" alt="Facebook" />
                        Facebook
                    </button>
                    <button className="social-btn instagram-btn">
                        <img src="https://img.icons8.com/fluent/48/instagram-new.png" alt="Instagram" />
                        Instagram
                    </button>
                    <button className="social-btn tiktok-btn">
                        <img src="https://img.icons8.com/color/48/tiktok.png" alt="TikTok" />
                        TikTok
                    </button>
                </div>

                <p className="signup-text">
                    Don't have an account? <Link href="/store/signup">Sign Up</Link>
                </p>
            </div>

            <style jsx>{`
        .login-container {
          min-height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: radial-gradient(circle at top right, rgba(212, 175, 55, 0.05), transparent);
        }
        .login-card {
          width: 100%;
          max-width: 450px;
          padding: 2.5rem;
          border-radius: var(--radius-lg);
          text-align: center;
        }
        .login-header h1 {
          font-family: 'Monotype Corsiva', cursive;
          font-size: 2.5rem;
          color: var(--accent-color);
          margin-bottom: 0.5rem;
        }
        .login-tabs {
          display: flex;
          gap: 1rem;
          margin: 2rem 0;
          border-bottom: 1px solid var(--border-color);
        }
        .login-tabs button {
          flex: 1;
          padding: 0.75rem;
          color: var(--text-secondary);
          background: transparent;
          border: none;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        .login-tabs button.active {
          color: var(--accent-color);
          border-bottom: 2px solid var(--accent-color);
        }
        .login-form {
          text-align: left;
        }
        .input-field {
          margin-bottom: 1.25rem;
        }
        .input-field label {
          display: block;
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
        }
        .input-field input {
          width: 100%;
          padding: 0.75rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          color: var(--text-primary);
        }
        .mobile-input {
          display: flex;
          align-items: center;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 0 0.75rem;
        }
        .mobile-input span {
          color: var(--text-secondary);
          padding-right: 0.5rem;
          border-right: 1px solid var(--border-color);
        }
        .mobile-input input {
          border: none;
          background: transparent;
        }
        .divider {
          margin: 2rem 0;
          position: relative;
          text-align: center;
        }
        .divider::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--border-color);
          z-index: 1;
        }
        .divider span {
          background: var(--bg-secondary);
          padding: 0 1rem;
          font-size: 0.75rem;
          color: var(--text-secondary);
          position: relative;
          z-index: 2;
        }
        .social-login-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.6rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          font-size: 0.875rem;
          transition: background 0.2s;
        }
        .social-btn img {
          width: 20px;
          height: 20px;
        }
        .social-btn:hover {
          background: rgba(255,255,255,0.1);
        }
        .signup-text {
          margin-top: 2rem;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }
        .signup-text a {
          color: var(--accent-color);
          font-weight: 600;
        }
        .w-full { width: 100%; }
        .mt-4 { margin-top: 1rem; }
        .text-center { text-align: center; }
        .text-xs { font-size: 0.75rem; }
      `}</style>
        </div>
    );
}
