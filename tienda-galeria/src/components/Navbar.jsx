import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "./CartContext";
import "../css/Navbar.css";

export default function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.");
    setIsContactOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        {/* Logo con animación */}
        <div className="navbar-logo">
          <span className="logo-icon">🛒</span>
          <span className="logo-text">MiTienda</span>
        </div>

        {/* Menú de navegación */}
        <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Inicio</Link></li>
          <li><Link to="/productos" onClick={() => setIsMobileMenuOpen(false)}>Productos</Link></li>
          <li><Link to="/ofertas" onClick={() => setIsMobileMenuOpen(false)}>Ofertas</Link></li>
          <li>
            <button 
              className="contact-nav-btn"
              onClick={() => setIsContactOpen(true)}
            >
              Contacto
            </button>
          </li>
        </ul>

        {/* Botón del carrito */}
        <Link to="/checkout" className="navbar-cart">
          <span className="cart-icon">🛍️</span>
          <span className="cart-text">Carrito</span>
          {getTotalItems() > 0 && (
            <span className="cart-badge">{getTotalItems()}</span>
          )}
        </Link>

        {/* Botón hamburguesa para móvil */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Modal de contacto */}
      {isContactOpen && (
        <div className="contact-modal-overlay" onClick={() => setIsContactOpen(false)}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <div className="contact-modal-header">
              <h2>📞 Contáctanos</h2>
              <button 
                className="close-btn"
                onClick={() => setIsContactOpen(false)}
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={handleContactSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nombre completo</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="Tu nombre" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="tu@email.com" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Teléfono (opcional)</label>
                <input 
                  type="tel" 
                  id="phone"
                  placeholder="+34 600 000 000" 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Asunto</label>
                <select id="subject" required>
                  <option value="">Selecciona un asunto</option>
                  <option value="consulta">Consulta general</option>
                  <option value="pedido">Seguimiento de pedido</option>
                  <option value="devolucion">Devolución o cambio</option>
                  <option value="sugerencia">Sugerencia</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea 
                  id="message"
                  placeholder="Cuéntanos en qué podemos ayudarte..." 
                  rows="4"
                  required
                ></textarea>
              </div>
              
              <div className="form-actions">
                <button 
                  type="button" 
                  className="btn-secondary"
                  onClick={() => setIsContactOpen(false)}
                >
                  Cancelar
                </button>
                <button type="submit" className="btn-primary">
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
