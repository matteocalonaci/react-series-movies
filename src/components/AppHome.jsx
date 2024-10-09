// AppHome.js
import React, { useState, useEffect } from 'react';
import AppSeries from './AppSeries';
import AppMovies from './AppMovies';
import SingleSerie from './SingleSerie';
import SingleMovie from './SingleMovie';

function AppHome() {
  const [seriesPreview, setSeriesPreview] = useState([]);
  const [moviesPreview, setMoviesPreview] = useState([]);
  const [seriesPage, setSeriesPage] = useState(1);
  const [moviesPage, setMoviesPage] = useState(1);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Yjg4MDczYmU2MTY5YTE0Y2JmMjkxMTRiOGJkMzI3MCIsIm5iZiI6MTcyODA0MjY4Mi4zNjEsInN1YiI6IjY2NTcyYzkyYmZhYjg0OTg3ODU5OTcwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5by33LdQ0QaT-ujUXAOCPD3BRVBRfrNF0sO4XLybJ1Y'
    }
  };

  useEffect(() => {
    const fetchSeriesPreview = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=${seriesPage}`, options);
      const data = await response.json();
      setSeriesPreview(data.results.slice(0, 4));
    };

    const fetchMoviesPreview = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${moviesPage}`, options);
      const data = await response.json();
      setMoviesPreview(data.results.slice(0, 4));
    };

    fetchSeriesPreview();
    fetchMoviesPreview();
  }, [seriesPage, moviesPage]);

  const handleSeriesPageChange = (direction) => {
    if (direction === 'next') {
      setSeriesPage(seriesPage + 1);
    } else if (direction === 'prev') {
      setSeriesPage(seriesPage - 1);
    }
  };

  const handleMoviesPageChange = (direction) => {
    if (direction === 'next') {
      setMoviesPage(moviesPage + 1);
    } else if (direction === 'prev') {
      setMoviesPage(moviesPage - 1);
    }
  };

  return (
    <div>
      <h5>Series Preview:</h5>
      <div className="flex flex-wrap justify-center mb-4">
        {seriesPreview.map(serie => (
          <SingleSerie key={serie.id} serie={serie} className="serie-card w-full sm:w-1/4 xl:w-1/4 p-4" />
        ))}
      </div>
      <div className="flex justify-center mb-4">
        {seriesPage > 1 && (
          <button onClick={() => handleSeriesPageChange('prev')} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-2">
            Previous
          </button>
        )}
        {seriesPage < 1000 && (
          <button onClick={() => handleSeriesPageChange('next')} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-2">
            Next
          </button>
        )}
      </div>
  
      <h5>Movies Preview:</h5>
      <div className="flex flex-wrap justify-center mb-4">
        {moviesPreview.map(movie => (
          <SingleMovie key={movie.id} movie={movie} className="movie-card w-full sm:w-1/4 xl:w-1/4 p-4" />
        ))}
      </div>
      <div className="flex justify-center mb-4">
        {moviesPage > 1 && (
          <button onClick={() => handleMoviesPageChange('prev')} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-2">
            Previous
          </button>
        )}
        {moviesPage < 1000 && (
          <button onClick={() => handleMoviesPageChange('next')} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-2">
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default AppHome;