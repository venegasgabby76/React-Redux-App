import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from "./components/Movies"
import MovieList from './components/MovieList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>We love Studio Ghibli. Fetch your Movies here!</h3>
        <Movies />
        <MovieList />
      </header>
    </div>
  );
}

export default App;
