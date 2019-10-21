import React from 'react';
import MovieSearch from '../components/MovieSearch';
import Loading from '../components/Loading';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <MovieSearch />
      </div>
    );
  }
}

export default HomePage;
