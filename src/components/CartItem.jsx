import { useCart } from '../context/CartContext';

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => updateQuantity(item.id, 1)}>➕</button>
      <button onClick={() => updateQuantity(item.id, -1)}>➖</button>
      <button onClick={() => removeFromCart(item.id)}>🗑️</button>
    </div>
  );
}
