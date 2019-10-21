import React from 'react';
import { Redirect } from 'react-router-dom';

class MovieSearch extends React.Component {
  render() {
    return (
      <div className="col-12 col-md-12 col-lg-12">
        <div className="input-group">
         <input
           type="text"
           placeholder="Search for a Movie"
           className="form-control mr-3 rounded"
         />
         <button className="btn btn-primary"> Search </button>
        </div>
      </div>
    );
  }
}

export default MovieSearch;
