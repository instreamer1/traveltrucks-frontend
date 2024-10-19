import CamperCard from '../CamperCard/CamperCard';
import css from './CampersList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectItemsPerPage,
  selectList,
  selectTotalItems,
} from '../../redux/campers/selectors';
import { setItemsPerPage } from '../../redux/campers/slice';

const CampersList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectList);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const totalItems = useSelector(selectTotalItems);
  const isLoading = useSelector(selectIsLoading);



  const paginatedCars = cars.slice(0, itemsPerPage);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleLoadMore = () => {
    if (itemsPerPage < totalItems && !isLoading) {
      dispatch(setItemsPerPage(itemsPerPage + 4));
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {paginatedCars.length > 0 ? (
            <section className={css.carCards}>
              <ul className={css.carList}>
                {paginatedCars.map(car => (
                  <li key={car.id} className={css.carItem}>
                    <CamperCard car={car} />
                  </li>
                ))}
              </ul>
              <div className={css.pagination}>
                {itemsPerPage < totalItems && (
                  <button
                    className={css.btn}
                    onClick={handleLoadMore}
                    disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Load more'}
                  </button>
                )}
              </div>
            </section>
          ) 
          : (
            <p>0 results found</p>
          )}
        </>
      )} 
    </>
  );
};

export default CampersList

