import CarCard from '../CarCard/CarCard';
import css from './CarSection.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectItemsPerPage, selectList, selectTotalItems } from '../../redux/campers/selectors';
import { setItemsPerPage } from '../../redux/campers/slice';


const CarSection = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectList);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const totalItems = useSelector(selectTotalItems);
  const isLoading = useSelector(selectIsLoading)

 

  const paginatedCars = cars.slice(0, itemsPerPage);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleLoadMore = () => {
    if (itemsPerPage < totalItems) {
      dispatch(setItemsPerPage(itemsPerPage + 4)); 
    }
  };

  return (
    <section className={css.carCards}>
      <ul className={css.carList}>
        {paginatedCars.map(car => (
          <li key={car.id} className={css.carItem}>
            <CarCard car={car} />
          </li>
        ))}
      </ul>
      <div className={css.pagination}>
        {itemsPerPage < totalItems && (
          <button className={css.btn} onClick={handleLoadMore} disabled={isLoading}>
        {isLoading ? "Loading..." : " Load more"}
           
          </button>
        )}
      </div>
    </section>
  );
};

export default CarSection;
