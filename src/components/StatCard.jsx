import React from 'react';

/**
 * Reusable StatCard Component demonstrating React Component Props.
 * Props received:
 * - label: string (title of KPI)
 * - value: string | number (numeric value to display)
 * - icon: ReactNode (icon component)
 * - color: string (accent color)
 * - bg: string (icon background wrapper color)
 */
export const StatCard = ({ label, value, icon, color = '#34d399', bg = 'rgba(16, 185, 129, 0.15)' }) => {
  return (
    <div className="kpi-card">
      <div className="kpi-icon-wrapper" style={{ background: bg, color }}>
        {icon}
      </div>
      <div className="kpi-details">
        <div className="kpi-value">{value}</div>
        <div className="kpi-label">{label}</div>
      </div>
    </div>
  );
};
