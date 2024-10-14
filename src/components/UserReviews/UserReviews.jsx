import css from './UserReviews.module.css';
import iconSprite from '../../assets/sprite.svg';

const UserReviews = ({ car }) => {
  const totalStars = 5; 
  return (
    <div className={css.reviews}>
      <ul className={css.revList}>
        {car.reviews.map((review, index) => (
          <li key={index} className={css.revItem}>
            <div className={css.header}>
              <div className={css.avatar}>
                <span className={css.avatarInitial}>
                  {review.reviewer_name.slice(0, 1)}
                </span>
              </div>
              <div className={css.authorInfo}>
                <h3 className={css.reviewAuthor}>{review.reviewer_name}</h3>

                <ul className={css.reviewRating}>
                  {[...Array(totalStars)].map((_, index) => (
                    <li key={index} className={css.iconItem}>
                      <svg
                        className={`${css.iconDetails} ${
                          index < review.reviewer_rating ? css.filled : ''
                        }`}>
                        <use href={`${iconSprite}#icon-star`}></use>
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className={css.reviewText}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserReviews;
