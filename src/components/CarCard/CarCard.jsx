import css from './CarCard.module.css';
import iconSprite from '../../assets/sprite.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentCarId } from '../../redux/campers/slice';

const CarCard = ({ car }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentCarId(car.id)); 
    navigate(`/catalog/${car.id}`);
  };

  return (
    <article className={css.carCard}>
      <img
        className={css.carImage}
        src={car.gallery[0].thumb}
        alt={car.description}
      />
      <div className={css.carInfo}>
        <div className={css.carHeader}>
          <h2 className={css.carTitle}>{car.name}</h2>
          <div className={css.carWrapper}>
            <p className={css.carPrice}>€{car.price}</p>
            <svg className={css.iconHeader}>
              <use href={`${iconSprite}#icon-hart`}></use>
            </svg>
          </div>
        </div>

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
            {car.rating} ({car.reviews?.length || 0})
          </span>
          <span className={css.carLocation}>{car.location}</span>
        </div>

        <p className={css.carDescription}>{car.description}</p>

        <ul className={css.carBadges}>
          <li className={css.carBadgesItem}>
            <svg className={css.icon}>
              <use href={`${iconSprite}#icon-diagram`}></use>
            </svg>
            <p className={css.carBadgesItemText}>{car.transmission}</p>
          </li>
          <li className={css.carBadgesItem}>
            <svg className={css.icon}>
              <use href={`${iconSprite}#icon-petrol`}></use>
            </svg>
            <p className={css.carBadgesItemText}>{car.engine}</p>
          </li>

          {car.kitchen && (
            <li className={css.carBadgesItem}>
              <svg className={css.icon}>
                <use href={`${iconSprite}#icon-kitchen`}></use>
              </svg>
              <p className={css.carBadgesItemText}>Kitchen</p>
            </li>
          )}
          {car.AC && (
            <li className={css.carBadgesItem}>
              <svg className={css.icon}>
                <use href={`${iconSprite}#icon-ac`}></use>
              </svg>
              <p className={css.carBadgesItemText}>AC</p>
            </li>
          )}
          {car.bathroom && (
            <li className={css.carBadgesItem}>
              <svg className={css.icon}>
                <use href={`${iconSprite}#icon-bathroom`}></use>
              </svg>
              <p className={css.carBadgesItemText}>Bathroom</p>
            </li>
          )}
          {car.TV && (
            <li className={css.carBadgesItem}>
              <svg className={css.icon}>
                <use href={`${iconSprite}#icon-tv`}></use>
              </svg>
              <p className={css.carBadgesItemText}>TV</p>
            </li>
          )}
          {car.radio && (
            <li className={css.carBadgesItem}>
              <svg className={css.icon}>
                <use href={`${iconSprite}#icon-radio`}></use>
              </svg>
              <p className={css.carBadgesItemText}>Radio</p>
            </li>
          )}
          <li className={css.carBadgesItem}>
            <svg className={css.icon}>
              <use href={`${iconSprite}#icon-adults`}></use>
            </svg>
            <p className={css.carBadgesItemText}> 2 adults</p>
          </li>
        </ul>

        <button className={css.showMoreBtn} onClick={handleClick}>
          Show more
        </button>
      </div>
    </article>
  );
};

export default CarCard;