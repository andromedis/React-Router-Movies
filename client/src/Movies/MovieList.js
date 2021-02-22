import React from 'react';
import { useHistory } from 'react-router-dom';



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
  const { title, director, metascore, id } = props.movie;

  const history = useHistory();

  const routeToMovie = (id) => {
    console.log(history);
    console.log(id);
    history.push(`/movies/${id}`);
    console.log(history);
    console.log(id);
  }

  return (

    <div className="movie-card" onClick={() => routeToMovie(id)}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>

  );
}
