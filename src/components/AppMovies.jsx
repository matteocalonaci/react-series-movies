import { useEffect, useState } from "react";
import SingleMovie from "./SingleMovie";

function AppMovies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(12);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Yjg4MDczYmU2MTY5YTE0Y2JmMjkxMTRiOGJkMzI3MCIsIm5iZiI6MTcyODA0MjY4Mi4zNjEsInN1YiI6IjY2NTcyYzkyYmZhYjg0OTg3ODU5OTcwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5by33LdQ0QaT-ujUXAOCPD3BRVBRfrNF0sO4XLybJ1Y'      }
    };

    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, 
      options
    )
      .then(response => {
        if (!response.ok) {
          throw new Error('Errore nella risposta del server');
        }
        return response.json();
      })
      .then(data => {
        setMovies(data.results.slice(0, cardsPerPage));
        setTotalPages(Math.ceil(data.total_results / cardsPerPage));
      })
      .catch(err => {
        setError(err.message);
      });
  }, [page]);

  return (
    <div>
      <h5 className="text-3xl pb-4 text-red-700 font-bold">Movies List:</h5>
      <div className="flex flex-wrap justify-center">
        {movies.map(movie => (
          <SingleMovie key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="flex justify-center mb-4">
        {page > 1 && (
          <button className="m-2" onClick={() => setPage(page - 1)}>Previous</button>
        )}
        {page < totalPages && (
          <button className="m-2" onClick={() => setPage(page + 1)}>Next</button>
        )}
      </div>
    </div>
  );
}

export default AppMovies;
