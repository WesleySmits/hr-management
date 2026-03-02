import React from 'react';

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <h1>Welcome to HR Management</h1>
        <p>Overview of your organization's people & operations.</p>
      </section>

      <section className="quick-stats">
        <div className="stat"><div className="label">Employees</div><div className="value">124</div></div>
        <div className="stat"><div className="label">Open Roles</div><div className="value">8</div></div>
        <div className="stat"><div className="label">Avg. Tenure</div><div className="value">3.4 yrs</div></div>
        <div className="stat"><div className="label">Sick Days</div><div className="value">12%</div></div>
      </section>
    </main>
  );
}
