import { Outlet } from "react-router-dom";
import PropTypes from 'prop-types';
import ReviewHeader from "../ReviewHeader/ReviewHeader";

const DetailsLayout = ({car})=> {
    return (
        <main>
          <ReviewHeader />
            <Outlet context={{ car }}/>
        
        </main>
      );
}
export default DetailsLayout 

DetailsLayout.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    gallery: PropTypes.arrayOf(
      PropTypes.shape({
        thumb: PropTypes.string.isRequired,
      })
    ).isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.object),
    transmission: PropTypes.string.isRequired,
    engine: PropTypes.string.isRequired,
    kitchen: PropTypes.bool,
    AC: PropTypes.bool,
    bathroom: PropTypes.bool,
    TV: PropTypes.bool,
    radio: PropTypes.bool,
  }).isRequired,
};


