import { Link } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">🛒 MiTienda</div>

      {/* Links */}
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/ofertas">Ofertas</Link></li> {/* ✅ Aquí estaba faltando */}
      </ul>

      {/* Carrito */}
      <Link to="/checkout" className="navbar-cart">
        Carrito
      </Link>
    </nav>
  );
}
