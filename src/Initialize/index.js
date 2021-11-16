import React from 'react';
import Navigation from '../components/Navigation';
import Routes from '../routes';

function Initialize() {
  return (
    <div className="App container">
      <Navigation />
      <Routes />
    </div>
  );
}

export default Initialize;
