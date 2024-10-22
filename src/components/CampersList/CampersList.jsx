import CamperCard from '../CamperCard/CamperCard';
import css from './CampersList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoading,
 
  selectList,
 
  selectTotalItems,
} from '../../redux/campers/selectors';

import { fetchCampers } from '../../redux/campers/operation';
import { selectFilters, selectLimit, selectPage } from '../../redux/filters/selectors';
import { setPage } from '../../redux/filters/filtersSlice';
import { setDataPage } from '../../redux/campers/slice';

const CampersList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectList);
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);
  const totalItems = useSelector(selectTotalItems)
  const isLoading = useSelector(selectIsLoading);
  const filters = useSelector(selectFilters)
  const campersError = useSelector(state => state.campers.error);

  const itemsPerPage = Math.ceil(totalItems / limit);
  // console.log("itemsPerPage",itemsPerPage);
  // console.log("totalItems", totalItems);
  // console.log("limit", limit);

 

  const handleLoadMore = () => {
    if (page < itemsPerPage && !isLoading) {
      dispatch(setPage(page + 1));
      dispatch(setDataPage(page + 1));
      const updatedFilters = { ...filters, page: page + 1 };
      dispatch(fetchCampers(updatedFilters));
    }
  };
  // console.log("Cars before rendering:", cars);

  if (campersError) {
  return <p style={{ color: 'red' }}>Error: {campersError}, Not found</p>}
    
 
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {cars.length > 0 ? (
            <section className={css.carCards}>
              <ul className={css.carList}>
                {cars.map(car => (
                  <li key={car.id} className={css.carItem}>
                    <CamperCard car={car} />
                  </li>
                ))}
              </ul>
              <div className={css.pagination}>
                { page < itemsPerPage && (
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

