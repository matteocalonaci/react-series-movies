import React, { useState } from "react";
import ReadMoreButton from "./ReadMoreButton";

import { Link } from "react-router-dom";

const SingleMovie = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="movie-card w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/5 p-2 m-2 border border-black hover:bg-gray-100 hover:shadow-md">
      <div className="movie-container">
        <img
          className="w-full movie-image"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-info hidden">
          <div className="info p-2 bg-neutral-900 bg-transparent">
            <h2 className="text-m p-3 bg-transparent">
              <b>{movie.title}</b>
            </h2>
            <div>
              <div
                className="description"
                style={{
                  maxHeight: "100px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {movie.overview}
              </div>
              <Link to={`/movies/${movie.id}`}>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;