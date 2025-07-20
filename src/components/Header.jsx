import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { getTotalItems } = useCart();
  const location = useLocation();

  return (
    <header className="header">
      <Link to="/"><h1>Paradise Nursery</h1></Link>
      <nav>
        {location.pathname !== '/products' && <Link to="/products">Products</Link>}
        {location.pathname !== '/cart' && <Link to="/cart">Cart 🛒 ({getTotalItems()})</Link>}
      </nav>
    </header>
  );
}
