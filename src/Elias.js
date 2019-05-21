import { Link } from 'react-router-dom';
import React from 'react';

export default class Elias extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <i className="fa fa-long-arrow-left fa-lg top-left" />
        </Link>
        <h1>Elias</h1>
      </div>
    );
  }
}
