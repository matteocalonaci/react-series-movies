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
    <div className="movie-card w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/5 p-2 m-2 border border-black hover:bg-gray-100 hover:shadow-md md:w-1/2 xl:w-1/5">
      <div className="movie-container">
        <img
          className="w-full movie-image"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-info hidden sm:p-2 sm:w-full">
          <div className="info sm:p-1 sm:bg-transparent">
            <h2 className="text-m sm:text-sm p-1 sm:p-0">
              <b>{movie.title}</b>
            </h2>
            <div className="sm:flex sm:flex-col">
              <div
                className="description sm:text-xs sm:w-full"
                style={{
                  maxHeight: "50px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {movie.overview}
              </div>
              <Link to={`/movies/${movie.id}`}>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded sm:text-xs sm:mt-2">
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