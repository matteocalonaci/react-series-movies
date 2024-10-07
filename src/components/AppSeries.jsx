import { useEffect, useState } from "react";
import SingleSerie from "./SingleSerie";

function AppSeries() {
  const [series, setSeries] = useState([]);
  const [error, setError] = useState(null);
  

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

  return (
    <div>
      <h5 className="text-3xl pb-4 text-red-700 font-bold">Series List:</h5>

      <div className="flex flex-wrap justify-center">
        {series.map((serie) => (
          <SingleSerie key={serie.id} serie={serie} />
        ))}
      </div>
    </div>
  );
}

export default AppSeries;
