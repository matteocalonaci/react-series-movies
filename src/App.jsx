import { Routes, Route } from 'react-router-dom';
import "./App.css";
import AppMovies from "./components/AppMovies";
import MovieDetails from './components/MovieDetials';


function App() {
  return (
    <>
<div className="">
{/* <AppMovies></AppMovies> */}
<Routes>
        <Route path="/movies" element={<AppMovies />} />
        <Route path="/details" element={<MovieDetails />} />
      </Routes>

</div>
    </>
  );
}

export default App;
