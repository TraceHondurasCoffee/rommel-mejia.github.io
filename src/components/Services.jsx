import React from 'react';
import { SERVICES, CLIENT_SECTORS, PAYMENT_GATEWAYS } from '../data/portfolioData';

export default function Services() {
  return (
    <section id="services" className="section-wrapper">
      <div>
        <span className="sec-label">Lo que hacemos</span>
        <h2 className="sec-title">
          Soluciones digitales
          <br />
          a tu medida.
        </h2>
        <p className="services-intro-text">
          Desarrollamos{' '}
          <strong>páginas web, aplicaciones y software personalizado</strong> para
          negocios de cualquier tamaño. Desde una landing page hasta un sistema
          completo con pasarela de pagos integrada. Cada proyecto es único y lo
          construimos desde cero según tus necesidades.
        </p>
      </div>

      {/* Services Grid */}
      <div className="services-cards-grid">
        {SERVICES.map((srv) => (
          <div
            key={srv.id}
            className="service-card-item"
            style={{ '--card-color': srv.color }}
          >
            <span className="service-icon-box">{srv.icon}</span>
            <h3 className="service-card-title">{srv.title}</h3>
            <p className="service-card-desc">{srv.description}</p>
            <ul className="service-features-list">
              {srv.features.map((feat, idx) => (
                <li key={idx} className="service-feature-point">
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Sectors and Clients */}
      <div>
        <p className="subheading-badge">// Sectores y clientes que atendemos</p>
        <div className="clients-sectors-grid">
          {CLIENT_SECTORS.map((sector, idx) => (
            <div key={idx} className="sector-card-item">
              <span className="sector-icon-symbol">{sector.icon}</span>
              <div>
                <p className="sector-name-label">{sector.name}</p>
                <p className="sector-type-desc">{sector.type}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Gateways */}
        <div style={{ marginTop: '50px' }}>
          <p className="subheading-badge">// Pasarelas de pago que integramos</p>
          <div className="payments-badges-container">
            {PAYMENT_GATEWAYS.map((gw, idx) => (
              <div key={idx} className="payment-gateway-pill">
                <span>{gw.icon}</span>
                <span>{gw.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
