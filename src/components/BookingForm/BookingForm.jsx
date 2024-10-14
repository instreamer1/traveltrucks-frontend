import { useState } from 'react';
import { toast } from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import css from './BookingForm.module.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: null, 
    comment: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = date => {
    setFormData({
      ...formData,
      date: date,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    toast.success('Booking successful!');
    setFormData({
      name: '',
      email: '',
      date: null, 
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
        <label htmlFor='name'>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Name*'
            required
          />
        </label>
        <label htmlFor='email'>
          <input
            type='email'
            id='email' 
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Email*'
            required
          />
        </label>
        <label htmlFor='date'>
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            placeholderText='Booking date*'
            required
            id='date' 
          />
        </label>
        <label htmlFor='comment'>
          <textarea
            id='comment'
            name='comment'
            value={formData.comment}
            onChange={handleChange}
            placeholder='comment'></textarea>
        </label>

        <button className={css.btn} type='submit'>
          Send
        </button>
      </form>
    </div>
  );
};

export default BookingForm;