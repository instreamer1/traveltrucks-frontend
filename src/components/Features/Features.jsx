import { lazy } from 'react';
const BookingForm = lazy(()=> import( '../BookingForm/BookingForm')) 
const Details = lazy(()=> import('../Details/Details'));
import css from './Features.module.css';


const Features = () => {
  return (
    <section className={css.tab}>
      <Details />
      <BookingForm />
    </section>
  );
};

export default Features;
