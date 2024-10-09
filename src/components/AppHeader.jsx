import React, { useState } from "react";

function AppHeader() {
  const [imageUrl, setImageUrl] = useState("https://nerdslider.wordpress.com/wp-content/uploads/2019/11/friendly-s.png");
  const [defaultImageUrl, setDefaultImageUrl] = useState("/default-image.jpg");

  const handleImageError = (e) => {
    setImageUrl(defaultImageUrl);
  };

  return (
    <nav className="rounded-3xl flex justify-between items-center p-4">
      <div className="flex justify-center items-center">
        <img 
          src={imageUrl}
          alt="Default Image"
          onError={handleImageError}
          className="p-1 w-20 md:w-24 lg:w-24 xl:w-24"
        />
      </div>
      <div className="links flex justify-evenly w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
        <a href="http://localhost:5173/">Home</a>
        <a href="http://localhost:5173/movies">Movies</a>
        <a href="http://localhost:5173/series">Series</a>
      </div>
    </nav>
  );
}

export default AppHeader;