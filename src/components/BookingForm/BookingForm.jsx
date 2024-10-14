import { useState } from 'react';
import { toast } from 'react-hot-toast';
import css from './BookingForm.module.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    comment: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    toast.success('Booking successful!');
    setFormData({
      name: '',
      email: '',
      date: '',
      comment: '',
    });
  };

  return (
    <div className={css.bookingForm}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Name*'
          required
        />
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Email*'
          required
        />

        <input
          type='date'
          id='date'
          name='date'
          value={formData.date}
          onChange={handleChange}
          placeholder='Booking date*'
          required
        />
        <textarea
          id='comment'
          name='comment'
          value={formData.comment}
          onChange={handleChange}
          placeholder='comment'></textarea>

        <button className={css.btn} type='submit'>
          Send
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
