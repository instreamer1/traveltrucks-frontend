import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './SaidBar.module.css';
import iconSprite from '../../assets/sprite.svg';
import { fetchCampers } from '../../redux/campers/operation';
import { setFilters } from '../../redux/campers/slice';
import { selectIsLoading } from '../../redux/campers/selectors';

const SaidBar = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [showWarning, setShowWarning] = useState(false);

  const initFilters = {
    location: '',
    transmission: '',
    vehicleEquipment: {
      AC: false,
      kitchen: false,
      TV: false,
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
    if (!isAnyFilterSelected) {
      setShowWarning(true);
      return;
    }
    dispatch(setFilters(filters));
    dispatch(fetchCampers(filters));
    setLocalFilters(initFilters);
    setShowWarning(false);
  };
  const isAnyFilterSelected = useMemo(() => {
    const { location, vehicleType, vehicleEquipment } = filters;

    if (location.trim() !== '') return true;
    if (vehicleType.trim() !== '') return true;

    return Object.values(vehicleEquipment).some(value => value);
  }, [filters]);

  useEffect(() => {
    if (isAnyFilterSelected) {
      setShowWarning(false);
    }
  }, [isAnyFilterSelected]);

  return (
    <aside className={css.sidebar}>
      <div className={css.locationSection}>
        <label htmlFor='location' className={css.filterLabel}>
          Location
        </label>
        <div className={css.inputWrapper}>
          <svg className={css.iconDetails}>
            <use href={`${iconSprite}#icon-map`}></use>
          </svg>
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
            Alcove
          </button>
        </div>
      </section>
      <div className={css.buttons}>
        <button className={css.searchBtn} onClick={handleSearch}>
          {isLoading ? 'Searching...' : 'Search'}
        </button>
        {showWarning && (
          <p className={css.warningMessage}>No filters selected</p>
        )}
      </div>
    </aside>
  );
};

export default SaidBar;
