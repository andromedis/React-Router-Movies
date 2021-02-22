import React from 'react';
import { useHistory } from 'react-router-dom';
import MovieCard from './MovieCard';

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const history = useHistory();

  const routeToMovie = (id) => {
    history.push(`/movies/${id}`);
  }

  return (
    // Extra div needed for routeToMovie callback
    <div onClick={() => routeToMovie(props.movie.id)} >
      <MovieCard movie={props.movie} />
    </div>
  );
}
