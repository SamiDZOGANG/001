import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';
import './Header.css';

const Header: React.FC = () => {
  const { state, toggleMobileMenu } = useAppContext();
  const location = useLocation();
  const { isMobileMenuOpen, isScrolled } = state.navigation;

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/outil', label: 'Outil' },
    { path: '/apropos', label: 'À propos' },
    { path: '/faq', label: 'FAQ' },
    { path: '/resultats', label: 'Résultats' }
  ];

  return (
    <header className={`header-laposte ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo-container">
          <div className="logo-laposte">La Poste</div>
          <h1 className="header-title">Engagement pour la neutralité carbone</h1>
        </div>

        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`main-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-list">
            {navItems.map(item => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={location.pathname === item.path ? 'active' : ''}
                  onClick={() => isMobileMenuOpen && toggleMobileMenu()}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;