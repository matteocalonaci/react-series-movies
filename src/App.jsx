import { Routes, Route } from "react-router-dom";
import "./App.css";
import AppMovies from "./components/AppMovies";
import MovieDetails from "./components/MovieDetials";
import SerieDetails from './components/SerieDetails';
import AppHeader from "./components/AppHeader";
import AppSeries from './components/AppSeries';
import AppHome from "./components/AppHome";

function App() {
  return (
    <>
      <div className="">
        <AppHeader></AppHeader>
        <Routes>
          <Route path="/" element={<AppHome />} />
          <Route path="/movies" element={<AppMovies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/series" element={<AppSeries />} />
          <Route path="/series/:id" element={<SerieDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
