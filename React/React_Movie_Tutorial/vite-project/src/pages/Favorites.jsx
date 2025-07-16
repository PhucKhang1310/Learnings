import React from "react";
import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your favorite movies</h2>
        <div className="favorites-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No favortie movies yet</h2>
      <p>Start adding movies to your favorites and they will appear here</p>
    </div>
  );
}

export default Favorites;
