import React, { useReducer, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";


const MOVIE_API_URL = "http://www.omdbapi.com/?s=man&apikey=5eca414";
//http://www.omdbapi.com/?t=&apikey=5eca414

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
};


const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: true,
        errorMessage: 'Cannot complete search request'
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};



const MovieSearch = () => {
  var [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch(MOVIE_API_URL)
        .then(response => response.json())
        .then(jsonResponse => {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: jsonResponse.Search
    	   });
    	  });
	}, []);
  const search = searchValue => {
  	dispatch({
    	type: "SEARCH_MOVIES_REQUEST"
    });
    const tokenArray = searchValue.split(' ');
    const validatedURLString = tokenArray.join('+');
    fetch(
      `https://www.omdbapi.com/?s=${validatedURLString}&apikey=5eca414`
    )
    .then(response => response.json())
  	.then(jsonResponse => {
      console.log('JSON RESPONSE', jsonResponse);
    	if (jsonResponse.Response === "True") {
      	dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search
      	});
    	} else {
      	dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.Error
      	});
      }
  	});
  };

    var { movies, errorMessage, loading } = state;

    return (
    <div className="App">
      <div className="welcome_image2">
      <Header text="The Daily Popcorn" />
      <Search search={search} />
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading... </span>
        ) : errorMessage ? (
          <div className="errorMessage col-lg-12">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
        </div>
      </div>
    </div>
  );
};

export default MovieSearch;
