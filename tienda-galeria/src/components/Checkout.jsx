import { useCart } from "./CartContext";

export default function Checkout() {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Carrito de Compras</h1>
      {cart.length === 0 && <p>Tu carrito está vacío.</p>}
      {cart.map((p) => (
        <div key={p.id} className="flex justify-between items-center border-b py-4">
          <div>
            <p className="font-semibold">{p.title}</p>
            <p>Cantidad: {p.qty}</p>
          </div>
          <p className="font-bold">S/. {(p.price * p.qty).toFixed(2)}</p>
          <button
            onClick={() => removeFromCart(p.id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Eliminar
          </button>
        </div>
      ))}
      <div className="mt-6 text-right">
        <p className="text-xl font-bold">Total: S/. {total.toFixed(2)}</p>
        <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded">Pagar (Simulación)</button>
      </div>
    </div>
  );
}
