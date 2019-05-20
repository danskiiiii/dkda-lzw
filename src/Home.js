import { Link } from 'react-router-dom';
import { PATHS } from '.';
import React from 'react';

export default function Home(props) {
  return (
    <div className="home">
      <h1>Algorytmy kompresji danych</h1>
      {PATHS.map(path => (
        <Link key={path} className="btn btn-light home" to={path}>
          {path}
        </Link>
      ))}
    </div>
  );
}
