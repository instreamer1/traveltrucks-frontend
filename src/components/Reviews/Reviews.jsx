import { useOutletContext } from 'react-router-dom';
import css from './Reviews.module.css'
import { lazy } from 'react';
const UserReviews = lazy(()=> import('../UserReviews/UserReviews'));
const BookingForm = lazy(()=> import('../BookingForm/BookingForm')) ;


const Reviews = () => {
  const { car } = useOutletContext();
  return (
    <section className={css.tab}>
      <UserReviews car ={car} />
      <BookingForm />
    </section>
  );
};
export default Reviews;
