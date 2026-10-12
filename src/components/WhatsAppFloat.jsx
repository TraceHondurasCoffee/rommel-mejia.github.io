import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function WhatsAppFloat() {
  const [showBubble, setShowBubble] = useState(false);
  const [bubbleDismissed, setBubbleDismissed] = useState(false);

  useEffect(() => {
    // Show bubble after 3.5s
    const timer = setTimeout(() => {
      if (!bubbleDismissed) {
        setShowBubble(true);
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, [bubbleDismissed]);

  const handleDismiss = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowBubble(false);
    setBubbleDismissed(true);
  };

  return (
    <div className="whatsapp-float-container">
      {showBubble && (
        <div className="whatsapp-chat-bubble">
          <button
            onClick={handleDismiss}
            style={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              color: '#94a3b8',
              padding: '2px',
            }}
            aria-label="Cerrar aviso"
          >
            <X size={13} />
          </button>
          <div>
            👋 ¡Hola! ¿Buscas soluciones de software o IT?
            <br />
            <strong style={{ color: '#0f172a' }}>
              Escríbeme al WhatsApp directo.
            </strong>
          </div>
        </div>
      )}

      <a
        href={PERSONAL_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-circle-btn"
        title="Chatear por WhatsApp"
        onMouseEnter={() => {
          if (!bubbleDismissed) setShowBubble(true);
        }}
      >
        <div className="whatsapp-unread-ping">1</div>
        <MessageCircle size={30} fill="#ffffff" color="#25d366" />
      </a>
    </div>
  );
}
