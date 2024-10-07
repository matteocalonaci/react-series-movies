import React, { useState } from "react";

function AppHeader() {
  const [imageUrl, setImageUrl] = useState("https://nerdslider.wordpress.com/wp-content/uploads/2019/11/friendly-s.png");
  const [defaultImageUrl, setDefaultImageUrl] = useState("/default-image.jpg");

  const handleImageError = (e) => {
    setImageUrl(defaultImageUrl);
  };

  return (
    <nav className="rounded-3xl">
      <div className="">
        <img 
          src={imageUrl}
          alt="Default Image"
          onError={handleImageError}
          className="w-20"
        />
      </div>
      <div className="links flex justify-evenly w-1/4">
        <a href="http://localhost:5173/">Home</a>
        <a href="http://localhost:5173/movies">Movies</a>
        <a href="http://localhost:5173/series">Series</a>
      </div>
    </nav>
  );
}

export default AppHeader;