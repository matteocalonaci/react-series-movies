import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SerieDetails(){
    const [series, setSeries] = useState([]);
    const [error, setError] = useState(null);
    const { id } = useParams();
  
    useEffect(() => {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Yjg4MDczYmU2MTY5YTE0Y2JmMjkxMTRiOGJkMzI3MCIsIm5iZiI6MTcyODA0MjY4Mi4zNjEsInN1YiI6IjY2NTcyYzkyYmZhYjg0OTg3ODU5OTcwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5by33LdQ0QaT-ujUXAOCPD3BRVBRfrNF0sO4XLybJ1Y",
          },
        };
    
        fetch(
          "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
          options
        )
          .then((response) => response.json())
          .then((data) => {
            setSeries(data.results);
            console.log(data.results);
          })
          .catch((err) => {
            setError(err.message);
          });
      }, []);
  
    const serie = series.find((serie) => serie.id === parseInt(id)); 
    if (!serie) {
      return <div>Film non trovato</div>;
    }
  
    return (
      <div className='flex p-2 rounded-2xl violet-bg'>
           <img
            className="w-1/3 serie-image"
            src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
            alt={serie.title}
          />
          <div className="px-5">
        <h1 className='text-3xl font-bold pb-10'>{serie.name}</h1>
        <p className='text-start pb-2'><b>Description:</b> {serie.overview}</p>
        <p className='text-start pb-2'><b>Original language:</b> {serie.original_language}</p>
        <p className='text-start pb-2'><b>Vote:</b> {serie.vote_average}</p>
        </div>
        </div>
  
    )
}
export default SerieDetails