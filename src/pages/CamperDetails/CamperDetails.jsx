import { NavLink, Outlet, useParams } from 'react-router-dom';
import css from './CamperDetails.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectList } from '../../redux/campers/selectors';
import { useEffect } from 'react';
import { setCurrentCarId } from '../../redux/campers/slice';
import iconSprite from '../../assets/sprite.svg';

const CamperDetails = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const { id: carId } = useParams();
  const cars = useSelector(selectList);
  const car = cars.find(car => car.id === carId);

  useEffect(() => {
    dispatch(setCurrentCarId(carId));
  }, [carId, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!car) {
    return <div>Car not found</div>;
  }

  const buildLinkClass = ({ isActive }) => {
    return `${css.navLink} ${isActive ? css.activeLink : ''}`;
  };

  return (
    <main className={css.camperDetails}>
      <section className={css.campervanDetails}>
        <h1 className={css.carTitle}>{car.name}</h1>
        <div className={css.carDetails}>
          <span className={css.carRating}>
            {car.reviews?.length > 0 ? (
              <svg className={css.iconDetails}>
                <use href={`${iconSprite}#icon-star`}></use>
              </svg>
            ) : (
              <svg className={css.iconDetailsRev}>
                <use href={`${iconSprite}#icon-star`}></use>
              </svg>
            )}
            {car.rating} ({car.reviews?.length || 0} Reviews)
          </span>
          <span className={css.carLocation}>
            <svg className={css.iconLocation}>
              <use href={`${iconSprite}#icon-loc`}></use>
            </svg>{' '}
            {car.location}
          </span>
        </div>
        <p className={css.carPrice}>€{car.price}</p>
        <ul className={css.gallery}>
          {car.gallery.map((img, index) => (
            <li key={index} className={css.carImgItem}>
              <img
                className={css.carImage}
                src={img.thumb}
                alt={car.description}
              />
            </li>
          ))}
        </ul>
        <p className={css.description}>{car.description}</p>
        <nav className={css.nav}>
          <NavLink className={buildLinkClass} to='feature'>
            Features
          </NavLink>
          <NavLink className={buildLinkClass} to='reviews'>
            Reviews
          </NavLink>
        </nav>
    
        {/* <svg width='100%' height='2' className={css.divider}>
          <use href={`${iconSprite}#divider`}></use>
        </svg> */}
        <svg width='100%' height='2' className={css.line}>
          <use href={`${iconSprite}#line`}></use>
        </svg>

        <Outlet context={{ car }} />
      </section>
    </main>
  );
};

export default CamperDetails;
