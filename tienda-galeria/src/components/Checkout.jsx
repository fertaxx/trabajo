import { useState } from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import "../css/Checkout.css";

export default function Checkout() {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const [orderComplete, setOrderComplete] = useState(false);

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const handleCompleteOrder = () => {
    // Simular completar pedido
    setTimeout(() => {
      setOrderComplete(true);
      clearCart();
    }, 1000);
  };

  if (orderComplete) {
    return (
      <div className="checkout-success">
        <div className="success-content">
          <div className="success-icon">✅</div>
          <h1>¡Pedido Completado!</h1>
          <p>Tu pedido ha sido procesado exitosamente.</p>
          <p>Recibirás un email de confirmación pronto.</p>
          <Link to="/" className="btn-primary">
            Volver al Inicio
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-content">
          <div className="empty-cart-icon">🛒</div>
          <h1>Tu carrito está vacío</h1>
          <p>Añade algunos productos para continuar comprando</p>
          <Link to="/" className="btn-primary">
            Volver al Inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout">
      <div className="container">
        <h1 className="checkout-title">Tu Carrito de Compras</h1>
        
        <div className="checkout-content">
          {/* Carrito */}
          <div className="cart-section">
            <h2>Productos en el Carrito ({items.length})</h2>
            <div className="cart-items">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    {item.image && (item.image.startsWith('http') || item.image.startsWith('/')) ? (
                      <img src={item.image} alt={item.name} onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }} />
                    ) : (
                      <span>{item.image || '🖼️'}</span>
                    )}
                    {item.image && (item.image.startsWith('http') || item.image.startsWith('/')) && (
                      <span style={{display: 'none'}}>🖼️</span>
                    )}
                  </div>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="item-category">{item.category}</p>
                    <p className="item-price">{item.price}</p>
                  </div>
                  <div className="item-quantity">
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="item-total">
                    S/{(() => {
                      const price = typeof item.price === 'string' ? parseFloat(item.price.replace('S/', '')) : parseFloat(item.price);
                      return (price * item.quantity).toFixed(2);
                    })()}
                  </div>
                  <button 
                    className="remove-item"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    🗑️
                  </button>
                </div>
      ))}
            </div>
          </div>

          {/* Resumen y Botón de Completar */}
          <div className="payment-section">
            <div className="order-summary">
              <h2>Resumen del Pedido</h2>
              <div className="summary-item">
                <span>Subtotal:</span>
                <span>S/{getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="summary-item">
                <span>Envío:</span>
                <span>Gratis</span>
              </div>
              <div className="summary-item total">
                <span>Total:</span>
                <span>S/{getTotalPrice().toFixed(2)}</span>
              </div>
            </div>

            <div className="simple-payment">
              <h2>Información Básica</h2>
              <div className="form-group">
                <label>Nombre completo</label>
                <input type="text" placeholder="Tu nombre" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="tu@email.com" />
              </div>
              <div className="form-group">
                <label>Dirección de envío</label>
                <input type="text" placeholder="Calle, número, ciudad" />
              </div>
              
              <button 
                className="complete-order-btn"
                onClick={handleCompleteOrder}
              >
                Completar Pedido
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
