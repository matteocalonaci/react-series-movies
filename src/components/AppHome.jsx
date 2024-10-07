import React from 'react';
import AppSeries from './AppSeries';
import AppMovies from './AppMovies';

function AppHome() {
  return (
    <div>
      <h1 className="text-5xl pb-4 text-white font-bold">Welcome to our platform!</h1>
      
      <div className="flex flex-col justify-center">
        <AppSeries />
        <AppMovies />

      </div>
    </div>
  );
}

export default AppHome;