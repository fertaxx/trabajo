import { useState } from "react";
import { products } from "../data/products";
import { useCart } from "./CartContext";
import "../css/Gallery.css";

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const { addToCart } = useCart();

  const categories = ["Ropa", "Frutas", "Electrónica", "Accesorios", "Hogar", "Juguetes"];
  const filtered = filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <div className="gallery-container">
      {/* Filtros */}
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>
          Todos
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={filter === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="products-grid">
        {filtered.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.title} />
            <div className="product-info">
              <h2>{p.title}</h2>
              <p className="category">{p.category}</p>
              <p className="price">S/. {p.price}</p>
              <button onClick={() => addToCart(p)}>Añadir al carrito</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
