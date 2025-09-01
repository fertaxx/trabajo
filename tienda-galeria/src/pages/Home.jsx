import { Link } from "react-router-dom";
import { useCart } from "../components/CartContext";
import "../css/Home.css";

export default function Home() {
  const { addToCart, getTotalItems } = useCart();

  const featuredProducts = [
    {
      id: 1,
      name: "Smartphone Galaxy S24",
      price: "S/899",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop",
      category: "Electrónica",
      discount: "20%"
    },
    {
      id: 2,
      name: "Zapatillas Running Pro",
      price: "S/129",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop",
      category: "Deportes",
      discount: "15%"
    },
    {
      id: 3,
      name: "Café Premium Colombiano",
      price: "S/24.99",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&h=200&fit=crop",
      category: "Alimentación",
      discount: "10%"
    },
    {
      id: 4,
      name: "Auriculares Wireless",
      price: "S/89",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",
      category: "Electrónica",
      discount: "25%"
    }
  ];

  const features = [
    {
      icon: "🚚",
      title: "Envío Gratis",
      description: "En pedidos superiores a €50"
    },
    {
      icon: "🔒",
      title: "Pago Seguro",
      description: "Transacciones 100% seguras"
    },
    {
      icon: "⏰",
      title: "Entrega Rápida",
      description: "En 24-48 horas"
    },
    {
      icon: "💯",
      title: "Garantía",
      description: "30 días de devolución"
    }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`¡${product.name} añadido al carrito!`);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">Bienvenido a</span>
              <br />
              <span className="hero-brand">🛒 MiTienda</span>
            </h1>
            <p className="hero-subtitle">
              Descubre una experiencia de compra única con productos de la más alta calidad. 
              Desde tecnología de vanguardia hasta artículos de uso diario, todo en un solo lugar.
            </p>
            <div className="hero-actions">
              <Link to="/productos" className="btn-primary">
                Ver Productos
              </Link>
              <Link to="/ofertas" className="btn-secondary">
                Ofertas Especiales
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-cards">
              <div className="floating-card card-1">🛍️</div>
              <div className="floating-card card-2">💻</div>
              <div className="floating-card card-3">🍎</div>
              <div className="floating-card card-4">👕</div>
            </div>
          </div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-31.92,206.8-58.46,69.27-26.15,140.09-54.24,213.56-61.32C583.67,31.83,672.4,44.08,762.84,58.47c89.91,14.14,180.9,30.24,273.84,29.34,92.84-1.13,184.54-16.45,272.9-35.34C1232.3,35.8,1284.14,27.15,1320,22V120H0Z" 
                  fill="#f8fafc" opacity=".25"></path>
            <path d="M0,0V15.81C13.36,35.64,35.21,66.92,84,92.33c52.4,27.6,127.31,32.23,192.39,20.47C341.72,100.11,398.27,76.8,466.84,70.18c68.54-6.62,138.54-2.06,209.29,13.49,70.79,15.52,142.6,38.69,218.2,42.28,75.6,3.58,154.6-5.79,229.34-22.29C1003.6,76.88,1081.6,60.18,1154.4,42.4,1227.22,24.63,1294.07,6.23,1360,0V120H0Z" 
                  fill="#f8fafc"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">¿Por qué elegir MiTienda?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Productos Destacados</h2>
            <p className="section-subtitle">Los productos más populares de la temporada</p>
          </div>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-badge">{product.discount}</div>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-price">
                    <span className="current-price">{product.price}</span>
                  </div>
                </div>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  Añadir al carrito
                </button>
              </div>
            ))}
          </div>
          <div className="view-all-container">
            <Link to="/productos" className="btn-outline">
              Ver Todos los Productos
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">¿Listo para empezar a comprar?</h2>
            <p className="cta-description">
              Únete a miles de clientes satisfechos y descubre por qué MiTienda es la elección preferida
            </p>
            <div className="cta-actions">
              <Link to="/productos" className="btn-primary btn-large">
                Comprar Ahora
              </Link>
              <Link to="/ofertas" className="btn-secondary btn-large">
                Ver Ofertas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h3>📧 Mantente Informado</h3>
            <p>Recibe las últimas ofertas y novedades directamente en tu email</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
