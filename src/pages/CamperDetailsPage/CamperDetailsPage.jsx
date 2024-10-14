import { NavLink, Outlet, useParams } from 'react-router-dom';
import css from './CamperDetailsPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectList } from '../../redux/campers/selectors';
import { useEffect, useState } from 'react';
import { setCurrentCarId } from '../../redux/campers/slice';
import iconSprite from '../../assets/sprite.svg';

const CamperDetailsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const { id: carId } = useParams();
  const cars = useSelector(selectList);
  const car = cars.find(car => car.id === carId);

  useEffect(() => {
    dispatch(setCurrentCarId(carId));
  }, [carId, dispatch]);

  const [activeTab, setActiveTab] = useState('feature');

  useEffect(() => {
    setActiveTab('feature');
  }, []);

  const buildLinkClass = tab => {
    return `${css.navLink} ${activeTab === tab ? css.activeLink : ''}`;
  };

  const handleTabClick = tab => {
    setActiveTab(tab);
  };
  //
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <main className={css.camperDetails}>
      <section className={css.campervanDetails}>
        <h1 className={css.carTitle}>{car.name}</h1>
        <div className={css.carDetails}>
          <div className={css.carRating}>
            {car.reviews?.length > 0 ? (
              <svg className={css.iconDetails}>
                <use href={`${iconSprite}#icon-star`}></use>
              </svg>
            ) : (
              <svg className={css.iconDetailsRev}>
                <use href={`${iconSprite}#icon-star`}></use>
              </svg>
            )}
            <p className={css.ratingText}>
              {car.rating} ({car.reviews?.length || 0} Reviews)
            </p>
          </div>
          <div className={css.carLocation}>
            <svg className={css.iconLocation}>
              <use href={`${iconSprite}#icon-map`}></use>
            </svg>
            <p className={css.locationText}>{car.location}</p>
          </div>
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
          <NavLink
            className={() => buildLinkClass('feature')}
            to='feature'
            onClick={() => handleTabClick('feature')}>
            Features
          </NavLink>
          <NavLink
            className={() => buildLinkClass('reviews')}
            to='reviews'
            onClick={() => handleTabClick('reviews')}>
            Reviews
          </NavLink>
        </nav>
        <svg width='100%' height='2' className={css.line}>
          <use href={`${iconSprite}#line`}></use>
        </svg>

        <Outlet context={{ car }} />
      </section>
    </main>
  );
};

export default CamperDetailsPage;
