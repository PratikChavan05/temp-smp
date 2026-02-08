import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'var(--color-dark-navy)',
      padding: '0.75rem 1rem',
      boxShadow: 'var(--shadow-md)',
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <NavLink to="/" style={{
          fontSize: 'clamp(1rem, 3vw, 1.125rem)',
          fontWeight: '700',
          color: 'var(--color-white)',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <img 
            src={logo} 
            alt="Pratik Patil's Academy Logo" 
            style={{
              height: '40px',
              width: '40px',
              objectFit: 'cover',
              borderRadius: '4px'
            }}
          />
          <span>Pratik Patil's Academy</span>
        </NavLink>
        
        {/* Desktop Menu */}
        <div style={{
          display: 'flex',
          gap: '0.65rem',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'none',
            gap: '0.65rem'
          }}
          className="desktop-menu">
            <NavLink 
              to="/inquiry" 
              style={({ isActive }) => ({
                color: 'var(--color-dark-navy)',
                backgroundColor: isActive ? 'var(--color-white)' : 'var(--color-cream)',
                textDecoration: 'none',
                fontWeight: '600',
                padding: '0.5rem 0.9rem',
                borderRadius: 'var(--radius-sm)',
                transition: 'background-color var(--transition-fast)',
                whiteSpace: 'nowrap',
                fontSize: '0.9rem'
              })}
            >
              Enquiry
            </NavLink>
            <NavLink 
              to="/admission" 
              style={({ isActive }) => ({
                color: 'var(--color-dark-navy)',
                backgroundColor: isActive ? 'var(--color-white)' : 'var(--color-cream)',
                textDecoration: 'none',
                fontWeight: '600',
                padding: '0.5rem 0.9rem',
                borderRadius: 'var(--radius-sm)',
                transition: 'background-color var(--transition-fast)',
                whiteSpace: 'nowrap',
                fontSize: '0.9rem'
              })}
            >
              Admission
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'none',
              backgroundColor: 'transparent',
              border: 'none',
              color: 'var(--color-white)',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.25rem'
            }}
            className="mobile-menu-btn"
            aria-label="Menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div style={{
          display: 'none',
          backgroundColor: 'var(--color-dark-navy)',
          padding: '1rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}
        className="mobile-dropdown">
          <NavLink 
            to="/inquiry"
            onClick={() => setIsMenuOpen(false)}
            style={({ isActive }) => ({
              color: 'var(--color-dark-navy)',
              backgroundColor: isActive ? 'var(--color-white)' : 'var(--color-cream)',
              textDecoration: 'none',
              fontWeight: '600',
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-sm)',
              display: 'block',
              marginBottom: '0.5rem',
              textAlign: 'center'
            })}
          >
            Enquiry Form
          </NavLink>
          <NavLink 
            to="/admission"
            onClick={() => setIsMenuOpen(false)}
            style={({ isActive }) => ({
              color: 'var(--color-dark-navy)',
              backgroundColor: isActive ? 'var(--color-white)' : 'var(--color-cream)',
              textDecoration: 'none',
              fontWeight: '600',
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-sm)',
              display: 'block',
              textAlign: 'center'
            })}
          >
            Admission Form
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
