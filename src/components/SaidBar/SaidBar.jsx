import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './SaidBar.module.css';
import iconSprite from '../../assets/sprite.svg';
import { fetchCampers } from '../../redux/campers/operation';
import { setFilters } from '../../redux/campers/slice';
import { selectIsLoading } from '../../redux/campers/selectors';

const SaidBar = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const initFilters = {
    location: '',
    transmission: '',
    vehicleEquipment: {
      ac: false,
      kitchen: false,
      tv: false,
      bathroom: false,
    },
    vehicleType: '',
  };

  const [filters, setLocalFilters] = useState(initFilters);

  const handleLocationChange = e => {
    const newLocation = e.target.value;
    setLocalFilters(prevFilters => ({
      ...prevFilters,
      location: newLocation,
    }));
  };

  const handleEquipmentChange = equipment => {
    setLocalFilters(prevFilters => ({
      ...prevFilters,
      vehicleEquipment: {
        ...prevFilters.vehicleEquipment,
        [equipment]: !prevFilters.vehicleEquipment[equipment],
      },
    }));
  };

  const handleTypeChange = type => {
    setLocalFilters(prevFilters => ({
      ...prevFilters,
      vehicleType: prevFilters.vehicleType === type ? '' : type,
    }));
  };

  const handleSearch = e => {
    e.preventDefault();
    dispatch(setFilters(filters));
    dispatch(fetchCampers(filters));
    setLocalFilters(initFilters);
  };

  return (
    <aside className={css.sidebar}>
      <div className={css.locationSection}>
        <label htmlFor='location' className={css.filterLabel}>
          Location
        </label>
        <input
          type='text'
          id='location'
          name='location'
          value={filters.location}
          onChange={handleLocationChange}
          placeholder='City'
          className={css.locationInputField}
        />
      </div>
      <section className={css.filterSection}>
        <h4>Vehicle Equipment</h4>
        <svg
          width='360'
          height='2'
          viewBox='0 0 360 2'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M0 1H360' stroke='#DADDE1' />
        </svg>
        <div className={css.filterOptionsWrap}>
          <button
            className={`${css.filterOption} ${
              filters.vehicleEquipment.AC ? css.selected : ''
            }`}
            onClick={() => handleEquipmentChange('AC')}>
            <svg className={css.icon}>
              <use href={`${iconSprite}#icon-ac`}></use>
            </svg>
            AC
          </button>
          <button
            className={`${css.filterOption} ${
              filters.vehicleEquipment.kitchen ? css.selected : ''
            }`}
            onClick={() => handleEquipmentChange('kitchen')}>
            <svg className={css.icon}>
              <use href={`${iconSprite}#icon-kitchen`}></use>
            </svg>
            Kitchen
          </button>
          <button
            className={`${css.filterOption} ${
              filters.vehicleEquipment.TV ? css.selected : ''
            }`}
            onClick={() => handleEquipmentChange('TV')}>
            <svg className={css.icon}>
              <use href={`${iconSprite}#icon-tv`}></use>
            </svg>
            TV
          </button>
          <button
            className={`${css.filterOption} ${
              filters.vehicleEquipment.bathroom ? css.selected : ''
            }`}
            onClick={() => handleEquipmentChange('bathroom')}>
            <svg className={css.icon}>
              <use href={`${iconSprite}#icon-bathroom`}></use>
            </svg>
            Bathroom
          </button>
        </div>
      </section>

      <section className={css.filterSectionType}>
        <h4>Vehicle Type</h4>
        <svg
          width='360'
          height='2'
          viewBox='0 0 360 2'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M0 1H360' stroke='#DADDE1' />
        </svg>
        <div className={css.filterOptionsWrap}>
          <button
            className={`${css.filterOption} ${
              filters.vehicleType === 'alcove' ? css.selected : ''
            }`}
            onClick={() => handleTypeChange('alcove')}>
            <svg className={css.icon}>
              <use href={`${iconSprite}#icon-bi_grid-3x3-gap`}></use>
            </svg>
            Alcove
          </button>
          <button
            className={`${css.filterOption} ${
              filters.vehicleType === 'fullyIntegrated' ? css.selected : ''
            }`}
            onClick={() => handleTypeChange('fullyIntegrated')}>
            <svg className={css.icon}>
              <use href={`${iconSprite}#icon-bi_grid`}></use>
            </svg>
            Fully Integrated
          </button>
          <button
            className={`${css.filterOption} ${
              filters.vehicleType === 'panelTruck' ? css.selected : ''
            }`}
            onClick={() => handleTypeChange('panelTruck')}>
            <svg className={css.icon}>
              <use href={`${iconSprite}#icon-bi_grid-1x2`}></use>
            </svg>
            Panel Truck
          </button>
        </div>
      </section>
      <div className={css.buttons}>
        <button
          className={css.searchBtn}
          onClick={handleSearch}
          disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>
    </aside>
  );
};

export default SaidBar;
