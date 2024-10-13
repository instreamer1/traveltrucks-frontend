import BookingForm from '../BookingForm/BookingForm';
import Details from '../Details/Details';
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
