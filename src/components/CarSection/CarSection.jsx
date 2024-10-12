import { useEffect } from 'react';
import { fetchCampers } from '../../api/campers';
import CarCard from '../CarCard/CarCard';
import css from './CarSection.module.css';
import { useState } from 'react';

const CarSection = () => {
  const [cars, setCars] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCampers = async () => {
      setError(null);
      try {
        const data = await fetchCampers();
        console.log(data.items);
        setCars(data.items.slice(0, 4));
      } catch (err) {
        setError(err.message);
      }
    };

    loadCampers();
  }, []);

  return (
    <section className={css.carCards}>
      <ul className={css.carList}>
        {cars.map(car => (
          <li key={car.id} className={css.carItem}>
            <CarCard car={car} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CarSection;
