import { useEffect, useState } from "react";
import SingleMovie from "./SingleMovie";

function AppMovies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Yjg4MDczYmU2MTY5YTE0Y2JmMjkxMTRiOGJkMzI3MCIsIm5iZiI6MTcyODA0MjY4Mi4zNjEsInN1YiI6IjY2NTcyYzkyYmZhYjg0OTg3ODU5OTcwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5by33LdQ0QaT-ujUXAOCPD3BRVBRfrNF0sO4XLybJ1Y'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Errore nella risposta del server');
        }
        return response.json();
      })
      .then(data => {
        setMovies(data.results);
        console.log(data.results)
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  return (
    <div>
        <h5 className="text-3xl pb-4 text-red-700 font-bold">Movies List:</h5>
      <div className="flex flex-wrap justify-center">
          {movies.map(movie => (
            <SingleMovie key={movie.id} movie={movie} />
          ))}
        </div>
    </div>
  );
}

export default AppMovies;