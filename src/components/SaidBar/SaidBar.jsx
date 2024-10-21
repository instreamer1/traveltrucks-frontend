import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './SaidBar.module.css';
import iconSprite from '../../assets/sprite.svg';
import { fetchCampers } from '../../redux/campers/operation';
import { selectFilters } from '../../redux/filters/selectors';
import { selectIsLoading } from '../../redux/campers/selectors';
import { resetFilters, setFilters } from '../../redux/filters/filtersSlice';

const SaidBar = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const filters = useSelector(selectFilters);
  const [showWarning, setShowWarning] = useState(false);

  const handleLocationChange = e => {
    const newLocation = e.target.value;

    dispatch(setFilters({ ...filters, location: newLocation }));
  };

  const handleEquipmentChange = e => {
    const { name } = e.target;
    dispatch(
      setFilters({
        ...filters,
        vehicleEquipment: {
          ...filters.vehicleEquipment,
          [name]: !filters.vehicleEquipment[name],
        },
      })
    );
  };

  const handleTypeChange = e => {
    const { value } = e.target;
    dispatch(setFilters({ ...filters, vehicleType: value }));
  };

  const isAnyFilterSelected = React.useMemo(() => {
    const { location, vehicleType, vehicleEquipment } = filters;
    if (location.trim() !== '') return true;
    if (vehicleType.trim() !== '') return true;
    return Object.values(vehicleEquipment).some(value => value);
  }, [filters]);

  const handleSearch = e => {
    e.preventDefault();

    if (!isAnyFilterSelected) {
      setShowWarning(true);
      return;
    }
    setShowWarning(false);
    dispatch(fetchCampers(filters));
  };

  const handleReset = () => {
    dispatch(resetFilters());
    dispatch(fetchCampers());
  };

  return (
    <aside className={css.sidebar}>
      <form onSubmit={handleSearch}>
        {/* Location */}
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

        {/* Vehicle Equipment */}
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
            <label
              className={`${css.filterOption} ${
                filters.vehicleEquipment.AC ? css.selected : ''
              }`}>
              <input
                type='checkbox'
                name='AC'
                checked={filters.vehicleEquipment.AC}
                onChange={handleEquipmentChange}
              />
              <svg className={css.icon}>
                <use href={`${iconSprite}#icon-ac`}></use>
              </svg>
              AC
            </label>
            <label
              className={`${css.filterOption} ${
                filters.vehicleEquipment.kitchen ? css.selected : ''
              }`}>
              <input
                type='checkbox'
                name='kitchen'
                checked={filters.vehicleEquipment.kitchen}
                onChange={handleEquipmentChange}
              />
              <svg className={css.icon}>
                <use href={`${iconSprite}#icon-kitchen`}></use>
              </svg>
              Kitchen
            </label>
            <label
              className={`${css.filterOption} ${
                filters.vehicleEquipment.TV ? css.selected : ''
              }`}>
              <input
                type='checkbox'
                name='TV'
                checked={filters.vehicleEquipment.TV}
                onChange={handleEquipmentChange}
              />
              <svg className={css.icon}>
                <use href={`${iconSprite}#icon-tv`}></use>
              </svg>
              TV
            </label>
            <label
              className={`${css.filterOption} ${
                filters.vehicleEquipment.bathroom ? css.selected : ''
              }`}>
              <input
                type='checkbox'
                name='bathroom'
                checked={filters.vehicleEquipment.bathroom}
                onChange={handleEquipmentChange}
              />
              <svg className={css.icon}>
                <use href={`${iconSprite}#icon-bathroom`}></use>
              </svg>
              Bathroom
            </label>
          </div>
        </section>

        {/* Vehicle Type */}
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
            <label
              className={`${css.filterOption} ${
                filters.vehicleType === 'alcove' ? css.selected : ''
              }`}>
              <input
                type='radio'
                name='vehicleType'
                value='alcove'
                checked={filters.vehicleType === 'alcove'}
                onChange={handleTypeChange}
              />
              <svg className={css.icon}>
                <use href={`${iconSprite}#icon-bi_grid-1x2`}></use>
              </svg>
              Van
            </label>
            <label
              className={`${css.filterOption} ${css.filterOptionIntegr}  ${
                filters.vehicleType === 'fullyIntegrated' ? css.selected : ''
              }`}>
              <input
                type='radio'
                name='vehicleType'
                value='fullyIntegrated'
                checked={filters.vehicleType === 'fullyIntegrated'}
                onChange={handleTypeChange}
              />
              <svg className={css.icon}>
                <use href={`${iconSprite}#icon-bi_grid`}></use>
              </svg>
              Fully Integrated
            </label>
            <label
              className={`${css.filterOption} ${
                filters.vehicleType === 'panelTruck' ? css.selected : ''
              }`}>
              <input
                type='radio'
                name='vehicleType'
                value='panelTruck'
                checked={filters.vehicleType === 'panelTruck'}
                onChange={handleTypeChange}
              />
              <svg className={css.icon}>
                <use href={`${iconSprite}#icon-bi_grid-3x3-gap`}></use>
              </svg>
              Panel Truck
            </label>
          </div>
        </section>
        <div className={css.buttons}>
          <button type='submit' className={css.searchBtn}>
            {isLoading ? 'Searching...' : 'Search'}
          </button>

          {isAnyFilterSelected && (
            <button
              type='button'
              className={css.searchBtn}
              onClick={handleReset}>
              {isLoading ? 'Reset Filters...' : 'Reset Filters'}
            </button>
          )}
          {showWarning && <p className={css.warningMessage}>Select filters</p>}
        </div>
      </form>
    </aside>
  );
};

export default SaidBar;
