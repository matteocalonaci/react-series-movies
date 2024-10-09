import { useEffect, useState } from "react";
import SingleSerie from "./SingleSerie";


function AppSeries() {
    const [series, setSeries] = useState([]);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(12);
  
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
        `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}`,
        options
      )
        .then(response => {
          if (!response.ok) {
            throw new Error('Errore nella risposta del server');
          }
          return response.json();
        })
        .then(data => {
          setSeries(data.results.slice(0, cardsPerPage));
          setTotalPages(Math.ceil(data.total_results / cardsPerPage));
        })
        .catch(err => {
          setError(err.message);
        });
    }, [page]);

  return (
    <div className="container mx-auto p-4">
      <h5 className="text-3xl pb-4 text-red-700 font-bold">Series List:</h5>

      <div className="flex flex-wrap justify-center">
        {series.map(serie => (
          <SingleSerie key={serie.id} serie={serie} />
        ))}
      </div>
      <div className="flex justify-center mb-4">
        <button
          className="m-2 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className="m-2 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
      {error && <div className="text-red-700">{error}</div>}
    </div>
  );
}

export default AppSeries;