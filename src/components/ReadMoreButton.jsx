import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ReadMoreButton = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (item.type === 'movie') {
      navigate(`/movies/${item.id}`);
    } else if (item.type === 'serie') {
      navigate(`/series/${item.id}`);
    }
  };

  return (
    <button onClick={handleClick}>Read More</button>
  );
};

export default ReadMoreButton;