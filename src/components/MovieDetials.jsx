import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();

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
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  const movie = movies.find((movie) => movie.id === parseInt(id)); 
  if (!movie) {
    return <div>Film non trovato</div>;
  }

  return (
    <div className='flex p-2 rounded-2xl violet-bg'>
         <img
          className="w-1/3 movie-image"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="px-5">
      <h1 className='text-3xl font-bold pb-10'>{movie.title}</h1>
      <p className='text-start pb-2'><b>Description:</b> {movie.overview}</p>
      <p className='text-start pb-2'><b>Original language:</b> {movie.original_language}</p>
      <p className='text-start pb-2'><b>Release date:</b> {movie.release_date}</p>
      <p className='text-start pb-2'><b>Vote:</b> {movie.vote_average}</p>
      </div>
      </div>

  )
}

export default MovieDetails;