import { products } from "../data/products";

export default function Offers() {
  // Ejemplo: primeras 4 como ofertas
  const offers = products.slice(0, 4);

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>🔥 Ofertas Especiales</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: "1.5rem"
      }}>
        {offers.map((p) => (
          <div key={p.id} style={{
            background: "white",
            border: "1px solid #e5e7eb",
            borderRadius: "0.75rem",
            padding: "1rem",
            textAlign: "center"
          }}>
            <img src={p.image} alt={p.title} style={{ height: "150px", objectFit: "contain" }} />
            <h3>{p.title}</h3>
            <p style={{ color: "#2563eb", fontWeight: "bold" }}>S/. {p.price}</p>
            <p style={{ color: "red", fontWeight: "600" }}>OFERTA -20%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
