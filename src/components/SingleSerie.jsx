import React, { useState } from "react";
import ReadMoreButton from "./ReadMoreButton";

import { Link } from "react-router-dom";

const SingleSerie = ({ serie }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="w-1/5 border border-black m-2">
      <div className="serie-container">
        <img
          className="w-full serie-image"
          src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
          alt={serie.name}
        />
        <div className="serie-info hidden">
          <div className="info p-2 bg-neutral-900 bg-transparent">
            <h2 className="text-m p-3 bg-transparent">
              <b>{serie.name}</b>
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
                {serie.overview}
              </div>
              <Link to={`/series/${serie.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSerie;
