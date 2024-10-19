import { useParams } from 'react-router-dom';
import css from './CamperDetailsPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectList } from '../../redux/campers/selectors';
import { useEffect } from 'react';
import { setCurrentCarId } from '../../redux/campers/slice';
import iconSprite from '../../assets/sprite.svg';
import DetailsLayout from '../../components/DetailsLayout/DetailsLayout';

const CamperDetailsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const { id: carId } = useParams();
  // const { id } = useParams();
  const cars = useSelector(selectList);
  const car = cars.find(car => car.id === carId);
  // console.log('id', id);

  useEffect(() => {
    dispatch(setCurrentCarId(carId));
  }, [carId, dispatch]);

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
        <div>
          <DetailsLayout car={car} />
        </div>
      </section>
    </main>
  );
};

export default CamperDetailsPage;
