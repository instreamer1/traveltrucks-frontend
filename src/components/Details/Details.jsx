import css from './Details.module.css';
import { useOutletContext } from 'react-router-dom';
import iconSprite from '../../assets/sprite.svg';

const Details = () => {
  const { car } = useOutletContext();

  const badges = [
    { icon: 'icon-diagram', text: car.transmission },
    { icon: 'icon-petrol', text: car.engine },
    car.kitchen && { icon: 'icon-kitchen', text: 'Kitchen' },
    car.AC && { icon: 'icon-ac', text: 'AC' },
    car.bathroom && { icon: 'icon-bathroom', text: 'Bathroom' },
    car.TV && { icon: 'icon-tv', text: 'TV' },
    car.radio && { icon: 'icon-radio', text: 'Radio' },
    { icon: 'icon-adults', text: '2 adults' },
  ];

  return (
    <div className={css.features}>
      <ul className={css.carBadges}>
        {badges.filter(Boolean).map((badge, index) => (
          <li key={index} className={css.carBadgesItem}>
            <svg className={css.icon}>
              <use href={`${iconSprite}#${badge.icon}`}></use>
            </svg>
            <p className={css.carBadgesItemText}>{badge.text}</p>
          </li>
        ))}
      </ul>
      <div className={css.vehicleDetails}>
        <h3 className={css.detailsText}>Vehicle details</h3>
        <svg width='100%' height='2' className={css.line}>
          <use href={`${iconSprite}#line`}></use>
        </svg>
        <ul  className={css.detailsList}>
          <li className={css.detailsItem}>
            <p>Form:</p><p>{car.form}</p>
          </li>
          <li className={css.detailsItem}>
            <p>Length:</p><p>{car.length}</p>
          </li>
          <li className={css.detailsItem}>
            <p>Width:</p><p>{car.width}</p>
          </li>
          <li className={css.detailsItem}>
            <p>Height:</p><p>{car.height}</p>
          </li>
          <li className={css.detailsItem}>
            <p>Tank:</p><p>{car.tank}</p>
          </li>
          <li className={css.detailsItem}>
            <p>Consumption:</p><p>{car.consumption}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Details;