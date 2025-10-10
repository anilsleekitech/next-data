import React from 'react';
import './common.css';

export const Card = ({ title, description, icon, className = '', onClick }) => (
  <div className={`card ${className}`} onClick={onClick}>
    {icon && <img src={icon} alt={title} className="card-icon" />}
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export const Section = ({ title, children, className = '' }) => (
  <section className={`section ${className}`}>
    {title && <h2 className="section-title">{title}</h2>}
    {children}
  </section>
);

export const StatsDisplay = ({ stats }) => (
  <div className="stats-container">
    {stats.map((stat, index) => (
      <div key={index} className="stat-item">
        {stat.icon && <img src={stat.icon} alt="" className="stat-icon" />}
        <h3 className="stat-value">{stat.value}</h3>
        <p className="stat-label">{stat.label}</p>
        {stat.subLabel && <p className="stat-sublabel">{stat.subLabel}</p>}
      </div>
    ))}
  </div>
);

export const TabPanel = ({ tabs, activeTab, onTabChange, className = '' }) => (
  <div className={`tab-panel ${className}`}>
    <div className="tab-buttons">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.icon && <img src={tab.icon} alt={tab.title} />}
          <span>{tab.title}</span>
        </button>
      ))}
    </div>
  </div>
);

export const Testimonial = ({ image, quote, role, company }) => (
  <div className="testimonial-card">
    <img src={image} alt={role} className="testimonial-image" />
    <blockquote>{quote}</blockquote>
    <p className="testimonial-author">
      <strong>{role}</strong>
      <span>{company}</span>
    </p>
  </div>
);

export const CaseStudyCard = ({ image, logo, description, stats }) => (
  <div className="case-study-card">
    <img src={image} alt="Case Study" className="case-study-image" />
    <img src={logo} alt="Company Logo" className="company-logo" />
    <p>{description}</p>
    <div className="case-study-stats">
      {stats.map((stat, index) => (
        <div key={index} className="stat">
          <h4>{stat.value}</h4>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
); 