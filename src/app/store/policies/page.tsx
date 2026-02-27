"use client";

export default function PoliciesPage() {
  return (
    <div className="policies-page container animate-fade-in">
      <div className="header">
        <h1>Store Policies</h1>
        <p className="text-muted">Everything you need to know about shopping with Sample Brand.</p>
      </div>

      <div className="content-grid">
        <section id="shipping" className="policy-section glass-panel">
          <h2>Shipping Policy</h2>
          <p>We deliver nationwide across Pakistan within 3-5 working days. International shipping takes 7-14 working days depending on the destination.</p>
          <ul className="policy-list">
            <li>Free shipping on domestic orders over $50.</li>
            <li>Standard domestic shipping fee is $15.</li>
            <li>International shipping calculated at checkout.</li>
          </ul>
        </section>

        <section id="returns" className="policy-section glass-panel">
          <h2>Returns & Exchanges</h2>
          <p>We accept returns within 14 days of delivery for unstitched and ready-to-wear items, provided they are unused and in original packaging.</p>
          <ul className="policy-list">
            <li>Fragrances and Beauty products are non-returnable.</li>
            <li>Exchange requests must be initiated within 7 days.</li>
            <li>Refunds will be processed to the original payment method.</li>
          </ul>
        </section>

        <section id="faq" className="policy-section glass-panel full-width">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How can I track my order?</h3>
              <p>Once your order is dispatched, you will receive a tracking link via email and SMS.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer Cash on Delivery?</h3>
              <p>Yes, Cash on Delivery is available for all domestic orders within Pakistan.</p>
            </div>
            <div className="faq-item">
              <h3>Can I cancel my order?</h3>
              <p>Orders can only be canceled within 12 hours of placement before they are processed.</p>
            </div>
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>We accept Visa, Mastercard, JazzCash, Easypaisa, and Cash on Delivery.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="policy-section glass-panel full-width contact-section">
          <h2>Contact Us</h2>
          <p>Need further assistance? Our customer support team is here to help.</p>
          <div className="contact-methods">
            <div className="contact-card">
              <h3>Email</h3>
              <p>support@samplebrand.com</p>
            </div>
            <div className="contact-card">
              <h3>Phone</h3>
              <p>+92 (300) 123-4567</p>
            </div>
            <div className="contact-card">
              <h3>Live Chat</h3>
              <p>Available 9 AM - 6 PM (Mon-Sat)</p>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .policies-page {
          padding-top: var(--spacing-xl);
          padding-bottom: var(--spacing-xl);
        }
        .header {
          text-align: center;
          margin-bottom: var(--spacing-xl);
        }
        .header h1 {
          font-size: 2.5rem;
          margin-bottom: var(--spacing-sm);
        }
        .content-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--spacing-lg);
        }
        @media (min-width: 768px) {
          .content-grid { grid-template-columns: 1fr 1fr; }
        }
        
        .policy-section {
          padding: var(--spacing-lg);
          border-radius: var(--radius-lg);
          height: 100%;
        }
        .policy-section.full-width {
          grid-column: 1 / -1;
        }
        .policy-section h2 {
          font-size: 1.5rem;
          margin-bottom: var(--spacing-md);
          color: var(--accent-color);
        }
        .policy-section p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: var(--spacing-md);
        }
        .policy-list {
          color: var(--text-secondary);
          padding-left: var(--spacing-md);
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        .policy-list li::marker {
          color: var(--accent-color);
        }

        .faq-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--spacing-lg);
          margin-top: var(--spacing-lg);
        }
        @media (min-width: 768px) {
          .faq-grid { grid-template-columns: 1fr 1fr; }
        }
        .faq-item h3 {
          font-size: 1.125rem;
          margin-bottom: var(--spacing-xs);
          color: var(--text-primary);
        }
        .faq-item p {
          margin-bottom: 0;
        }

        .contact-section {
          text-align: center;
        }
        .contact-methods {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-md);
          margin-top: var(--spacing-lg);
        }
        .contact-card {
          padding: var(--spacing-md);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
        }
        .contact-card h3 {
          font-size: 1rem;
          color: var(--text-primary);
          margin-bottom: var(--spacing-xs);
        }
        .contact-card p {
          margin-bottom: 0;
          color: var(--accent-color);
        }
      `}</style>
    </div>
  );
}
