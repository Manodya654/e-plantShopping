import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

export default function CartPage() {
  const { cart, getTotalItems, getTotalPrice } = useCart();

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <p>Total Items: {getTotalItems()}</p>
      <p>Total Price: ${getTotalPrice().toFixed(2)}</p>

      {cart.map(item => <CartItem key={item.id} item={item} />)}

      <Link to="/products"><button>Continue Shopping</button></Link>
      <button onClick={() => alert("Checkout feature coming soon!")}>Checkout</button>
    </div>
  );
}
