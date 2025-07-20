import { plants } from '../data/plants';
import PlantCard from '../components/PlantCard';

export default function ProductPage() {
  return (
    <div className="product-list">
      {plants.map(plant => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  );
}
