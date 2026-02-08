import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <NavLink to="/" className="nav-brand">
          Student Portal
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink 
              to="/inquiry" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Inquiry Form
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/admission" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              Admission Form
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
