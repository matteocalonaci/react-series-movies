import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Yjg4MDczYmU2MTY5YTE0Y2JmMjkxMTRiOGJkMzI3MCIsIm5iZiI6MTcyODA0MjY4Mi4zNjEsInN1YiI6IjY2NTcyYzkyYmZhYjg0OTg3ODU5OTcwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5by33LdQ0QaT-ujUXAOCPD3BRVBRfrNF0sO4XLybJ1Y'
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Errore nella risposta del server');
        }
        return response.json();
      })
      .then(data => {
        if (data.id === parseInt(id)) {
          setMovie(data);
        } else {
          setMovie(null);
        }
      })
      .catch(err => {
        console.error(err);
      });
  }, [id]);

  if (!movie) {
    return <div>Film non trovato</div>;
  }

  return (
    <div>
      <h1>Dettagli del film {movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    </div>
  );
}

export default MovieDetails;