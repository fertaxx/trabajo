import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Checkout from "./components/Checkout";
import { CartProvider } from "./components/CartContext";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Aquí Productos muestra la Galería */}
          <Route path="/productos" element={<Gallery />} />
          <Route path="/ofertas" element={<Offers />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}
