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
    <div className="w-1/5 border border-black m-2">
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
            <p className="pb-2">Release Date: {movie.release_date}</p>
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
              {/* <Link to={`/movies/${movie.id}`}>
                <button>Read More</button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
