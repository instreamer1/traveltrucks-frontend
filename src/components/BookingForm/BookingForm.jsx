import css from './BookingForm.module.css';

const BookingForm = () => {
  return (
    <div className={css.bookingForm}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <form className={css.form}>
        <input type='text' id='name' name='name' placeholder='Name*' required />

        <input
          type='email'
          id='email'
          name='email'
          placeholder='Email*'
          required
        />

        <input
          type='text'
          id='date'
          name='date'
          placeholder='Booking date*'
          required
        />
        <textarea id='comment' name='comment' placeholder='comment'></textarea>

        <button className={css.btn} type='submit'>
          Send
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
