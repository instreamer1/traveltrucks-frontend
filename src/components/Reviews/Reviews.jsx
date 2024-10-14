import { useOutletContext } from 'react-router-dom';
import UserReviews from '../UserReviews/UserReviews';
import css from './Reviews.module.css'
import BookingForm from '../BookingForm/BookingForm';


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
