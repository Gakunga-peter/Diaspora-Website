// components/footer4.js
import React from 'react'

export default function Footer4() {
  return (
    <>
      <footer className="footer4-container">
        <div className="footer4-content">
          {/* Logo */}
          <div className="footer4-logo">
            <img
              src="/images/logo.png"
              alt="Diaspora Community Logo"
              className="footer4-logo-image"
            />
          </div>

          {/* Links */}
          <nav className="footer4-nav">
            <a href="/guidelines">Community Guidelines</a>
            <a href="/terms">Terms of Use</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/cookies">Cookies Policy</a>
            <a href="/contact">Contact Us</a>
          </nav>
        </div>

        {/* Copyright */}
        <div className="footer4-copy">
          © {new Date().getFullYear()} Diaspora Community. All rights reserved.
        </div>
      </footer>

      <style jsx>{`
        .footer4-container {
          background: #f7f7f7;
          padding: 2rem 1rem;
        }
        .footer4-content {
          max-width: 1024px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .footer4-logo-image {
          height: 2.5rem;
        }
        .footer4-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer4-nav a {
          color: #4a5568;
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.2s;
        }
        .footer4-nav a:hover {
          color: #2d3748;
          text-decoration: underline;
        }
        .footer4-copy {
          margin-top: 1.5rem;
          text-align: center;
          color: #a0aec0;
          font-size: 0.75rem;
        }
        @media (max-width: 640px) {
          .footer4-content {
            flex-direction: column;
            align-items: center;
          }
          .footer4-nav {
            justify-content: center;
            margin-top: 1rem;
          }
        }
      `}</style>
    </>
  )
}
