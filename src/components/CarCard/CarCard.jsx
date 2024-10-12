import css from './CarCard.module.css';
import iconSprite from '../../assets/sprite.svg';

const CarCard = ({ car }) => {
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
            <span className={css.carPrice}>€{car.price}</span>
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
                <use href={`${iconSprite}#icon-kitcen`}></use>
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

        <button className={css.showMoreBtn}>Show more</button>
      </div>
    </article>
  );
};

export default CarCard;

// 0
// :
// AC
// :
// true
// TV
// :
// true
// bathroom
// :
// true
// consumption
// :
// "30l/100km"
// description
// :
// "Embadventures, promising comfort, style, and the freedom to explore at your own pace."
// engine
// :
// "diesel"
// form
// :
// "alcove"
// gallery
// :
// Array(3)
// 0
// :
// {thumb: 'https://ftp.goit.study/img/campers-test-task/1-1.webp', original: 'https://ftp.goit.study/img/campers-test-task/1-1.webp'}
// 1
// :
// {thumb: 'https://ftp.goit.study/img/campers-test-task/1-2.webp', original: 'https://ftp.goit.study/img/campers-test-task/1-2.webp'}
// 2
// :
// {thumb: 'https://ftp.goit.study/img/campers-test-task/1-3.webp', original: 'https://ftp.goit.study/img/campers-test-task/1-3.webp'}
// length
// :
// 3
// [[Prototype]]
// :
// Array(0)
// gas
// :
// false
// height
// :
// "3.65m"
// id
// :
// "1"
// kitchen
// :
// false
// length
// :
// "7.3m"
// location
// :
// "Ukraine, Kyiv"
// microwave
// :
// true
// name
// :
// "Road Bear C 23-25"
// price
// :
// 10000
// radio
// :
// true
// rating
// :
// 4.5
// refrigerator
// :
// false
// reviews
// :
// (2) [{…}, {…}]
// tank
// :
// "208l"
// transmission
// :
// "automatic"
// water
// :
// true
// width
// :
// "2.65m"
// [[Prototype]]
// :
// Object
