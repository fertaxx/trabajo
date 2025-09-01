import { Link } from "react-router-dom";
import "../css/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-brand">
            <span className="footer-logo">🛒</span>
            <h3>MiTienda</h3>
          </div>
          <p className="footer-description">
            Tu tienda de confianza para encontrar los mejores productos al mejor precio. 
            Calidad garantizada en cada compra.
          </p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              📘
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              📷
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              🐦
            </a>
            <a href="#" className="social-link" aria-label="YouTube">
              📺
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul className="footer-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/ofertas">Ofertas</Link></li>
            <li><Link to="/checkout">Carrito</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Ayuda</h4>
          <ul className="footer-links">
            <li><a href="#">Centro de Ayuda</a></li>
            <li><a href="#">Política de Devolución</a></li>
            <li><a href="#">Términos y Condiciones</a></li>
            <li><a href="#">Política de Privacidad</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <div className="contact-info">
            <p>📧 info@mitienda.com</p>
            <p>📞 +51 900 123 456</p>
            <p>📍 Av. Arequipa 123, Lima</p>
            <p>⏰ Lun-Vie: 9:00-18:00</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} MiTienda - Todos los derechos reservados</p>
          <div className="payment-methods">
            <span>💳</span>
            <span>🏦</span>
            <span>📱</span>
            <span>💻</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
