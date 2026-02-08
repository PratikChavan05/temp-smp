import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '2rem',
      background: 'linear-gradient(135deg, var(--color-cream) 0%, var(--color-white) 100%)'
    }}>
      <div style={{
        maxWidth: '800px',
        textAlign: 'center',
        background: 'var(--color-white)',
        padding: 'var(--spacing-2xl)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lg)'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '700',
          color: 'var(--color-primary)',
          marginBottom: 'var(--spacing-lg)'
        }}>
          Welcome to Student Portal
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: 'var(--color-text-light)',
          marginBottom: 'var(--spacing-2xl)',
          lineHeight: '1.8'
        }}>
          Choose an option below to get started with your student journey
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-xl)',
          marginTop: 'var(--spacing-2xl)'
        }}>
          <Link to="/inquiry" style={{ textDecoration: 'none' }}>
            <div style={{
              padding: 'var(--spacing-xl)',
              background: 'var(--color-primary)',
              color: 'var(--color-white)',
              borderRadius: 'var(--radius-md)',
              transition: 'all var(--transition-normal)',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-md)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }}>
                📝 Inquiry Form
              </h2>
              <p style={{ fontSize: '1rem', opacity: '0.9' }}>
                Submit your initial inquiry to learn more about our programs
              </p>
            </div>
          </Link>
          
          <Link to="/admission" style={{ textDecoration: 'none' }}>
            <div style={{
              padding: 'var(--spacing-xl)',
              background: 'var(--color-cream)',
              color: 'var(--color-primary)',
              borderRadius: 'var(--radius-md)',
              transition: 'all var(--transition-normal)',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-md)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }}>
                🎓 Admission Form
              </h2>
              <p style={{ fontSize: '1rem', opacity: '0.9' }}>
                Complete your admission application to join our institution
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
