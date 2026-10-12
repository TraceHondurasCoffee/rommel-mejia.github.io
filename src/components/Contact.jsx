import React, { useState } from 'react';
import {
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  RotateCcw,
  Loader2,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'El nombre es obligatorio';
    }
    if (!formData.email.trim()) {
      errs.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Ingresa un email válido';
    }
    if (!formData.message.trim()) {
      errs.message = 'El mensaje es obligatorio';
    } else if (formData.message.trim().length < 4) {
      errs.message = 'Por favor escribe un mensaje un poco más detallado';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSending(true);

    try {
      // Envío real a ariel10estradam@gmail.com mediante FormSubmit
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Nuevo mensaje en Portafolio Web - ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar mediante el servicio');
      }

      // Celebración con confeti
      try {
        confetti({
          particleCount: 85,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#22d3a5', '#38bdf8', '#a78bfa'],
        });
      } catch {
        // Ignorar si el navegador bloquea canvas
      }

      setIsSubmitted(true);
    } catch {
      // Respaldo inmediato por cliente de correo en caso de bloqueo de red
      const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `Contacto de ${formData.name} desde Portafolio Web`
      )}&body=${encodeURIComponent(
        `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
      setIsSubmitted(true);
    } finally {
      setIsSending(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setIsSubmitted(false);
  };

  const whatsappPrefilledUrl = `https://wa.me/${PERSONAL_INFO.phoneRaw}?text=${encodeURIComponent(
    `Hola Ing. Rommel Mejía! Mi nombre es ${formData.name || ''} (${formData.email || ''}). Me interesa consultarte sobre: ${formData.message || 'un nuevo proyecto'}`
  )}`;

  return (
    <section id="contact" className="section-wrapper">
      <div>
        <span className="sec-label">Contacto</span>
        <h2 className="sec-title">Hablemos.</h2>
      </div>

      <div className="contact-grid-layout">
        {/* Left Column: Info & Links */}
        <div>
          <p className="contact-lead-text">
            ¿Tienes un proyecto en mente? Ya sea desarrollo web, APIs,
            arquitectura SOA/microservicios, administración de bases de datos o
            infraestructura —{' '}
            <strong style={{ color: 'var(--text-bright)' }}>
              escríbeme y lo hacemos realidad.
            </strong>{' '}
            Respondo en menos de 24h.
          </p>

          <div className="contact-items-list">
            {/* WhatsApp */}
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-link"
              style={{
                borderColor: 'rgba(37, 211, 102, 0.3)',
                background: 'rgba(37, 211, 102, 0.05)',
              }}
            >
              <span className="contact-icon-symbol" style={{ color: '#25d366' }}>
                <MessageCircle size={24} />
              </span>
              <div>
                <p className="contact-key-label">WhatsApp — Respuesta inmediata</p>
                <p className="contact-val-text" style={{ color: '#25d366' }}>
                  {PERSONAL_INFO.phoneDisplay}
                </p>
              </div>
            </a>

            {/* Teléfonos Fijo y Móvil */}
            <a href="tel:+50498386363" className="contact-card-link">
              <span className="contact-icon-symbol" style={{ color: 'var(--green)' }}>
                <Phone size={22} />
              </span>
              <div>
                <p className="contact-key-label">Teléfonos Directos</p>
                <p className="contact-val-text">
                  {PERSONAL_INFO.phoneDisplay} / {PERSONAL_INFO.phoneSecondary}
                </p>
              </div>
            </a>

            {/* Email */}
            <a href={`mailto:${PERSONAL_INFO.email}`} className="contact-card-link">
              <span className="contact-icon-symbol" style={{ color: 'var(--blue)' }}>
                <Mail size={22} />
              </span>
              <div>
                <p className="contact-key-label">Correo Electrónico</p>
                <p className="contact-val-text accent-link">{PERSONAL_INFO.email}</p>
              </div>
            </a>

            {/* Location & Address */}
            <div className="contact-card-link">
              <span className="contact-icon-symbol" style={{ color: 'var(--orange)' }}>
                <MapPin size={22} />
              </span>
              <div>
                <p className="contact-key-label">Ubicación & Dirección</p>
                <p className="contact-val-text">{PERSONAL_INFO.location}</p>
                <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>
                  {PERSONAL_INFO.address}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-form-box">
          {isSubmitted ? (
            <div className="form-success-container">
              <CheckCircle2 size={54} color="var(--green)" style={{ margin: '0 auto 16px' }} />
              <h3 className="form-success-title">¡Mensaje enviado con éxito!</h3>
              <p className="form-success-sub">
                Tu mensaje ha sido remitido a <strong>{PERSONAL_INFO.email}</strong>.
                <br />
                Gracias {formData.name}, te responderé a la brevedad posible.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a
                  href={whatsappPrefilledUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-action"
                  style={{ justifyContent: 'center' }}
                >
                  <MessageCircle size={18} />
                  <span>Enviar también copia por WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={resetForm}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    color: 'var(--muted)',
                    fontSize: '13px',
                    marginTop: '8px',
                  }}
                >
                  <RotateCcw size={14} />
                  <span>Enviar otro mensaje</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group-field">
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre completo"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSending}
                  className="form-input-text"
                  style={{
                    borderColor: errors.name ? '#f87171' : undefined,
                  }}
                />
                {errors.name && (
                  <span className="form-error-hint">{errors.name}</span>
                )}
              </div>

              <div className="form-group-field">
                <input
                  type="email"
                  name="email"
                  placeholder="Tu correo electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSending}
                  className="form-input-text"
                  style={{
                    borderColor: errors.email ? '#f87171' : undefined,
                  }}
                />
                {errors.email && (
                  <span className="form-error-hint">{errors.email}</span>
                )}
              </div>

              <div className="form-group-field">
                <textarea
                  name="message"
                  placeholder="Cuéntame sobre tu proyecto, requerimientos o consulta..."
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSending}
                  className="form-textarea-text"
                  style={{
                    borderColor: errors.message ? '#f87171' : undefined,
                  }}
                />
                {errors.message && (
                  <span className="form-error-hint">{errors.message}</span>
                )}
              </div>

              <button
                type="submit"
                className="btn-form-submit"
                disabled={isSending}
                style={{ opacity: isSending ? 0.7 : 1, cursor: isSending ? 'not-allowed' : 'pointer' }}
              >
                {isSending ? (
                  <>
                    <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
                    <span>Enviando a {PERSONAL_INFO.email}...</span>
                  </>
                ) : (
                  <>
                    <span>Enviar Mensaje</span>
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
