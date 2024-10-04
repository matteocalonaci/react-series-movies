import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const ReadMoreButton = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`}>
      <button>Read More</button>
    </Link>
  );
};

export default ReadMoreButton;


