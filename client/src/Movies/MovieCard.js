import React from 'react';
import { useRouteMatch } from 'react-router-dom';

export default function MovieCard (props) {
  const { title, director, metascore, stars } = props.movie;
  const { path } = useRouteMatch();
  
  return (
    <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        {
          path === '/movies/:id' && 
          <h3>Actors</h3>
        }
        {
          path === '/movies/:id' &&
          stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))
        }
    </div>
  );
}
