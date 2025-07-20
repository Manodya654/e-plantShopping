import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="landing" style={{ backgroundImage: "url('/background.jpg')" }}>
      <h2>Welcome to Paradise Nursery</h2>
      <p>Variety of healthy, beautiful houseplants to liven up your home or office.</p>
      <p>At Paradise Nursery, we believe that every home deserves a touch of green. Our mission is to bring the calming beauty of nature indoors with a handpicked selection of healthy, vibrant houseplants. Whether you're a seasoned plant parent or just starting your indoor garden, we offer a variety of easy-to-care-for plants, curated to thrive in any space. From air-purifying favorites to rare tropical finds, Paradise Nursery is your one-stop shop for creating your own indoor paradise.</p>
      <Link to="/products"><button>Get Started</button></Link>
    </div>
  );
}
