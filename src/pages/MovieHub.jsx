import  { useState, useEffect } from "react";
import axios from "axios";
import "../assets/styles/MoviesHub/moviehub.css";

const MovieHub = () => {
  let [getName, setGetName] = useState("");
  let [submitName, setSubmitName] = useState("");
  let [movies, setMovies] = useState([]);

  let handleInput = (e) => {
    let keyname = e.target.value;
    setGetName(keyname);
  };

let handleSubmit = (e) => {
  e.preventDefault();
  movieData(getName);
  setSubmitName(getName)
  setGetName("");
};
// console.log(submitName)

  let movieData = async (name) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${name}&apikey=6cbdc9f5`,
      );
    //   console.log(response.data.Search);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  useEffect(() => {
    movieData("mission");  
}, [submitName]);


  let movieCard = movies.map((movie, index) => {
    return (
      <div className="movie-card" key={index}>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>Movie Title : {movie.Title}</h2>
        <div className="details">
          <p>
          <strong>Year</strong> : {movie.Year}
        </p>
        <p>
          <strong>imdbID</strong> : {movie.imdbID}
        </p>
        <p>
          <strong>Type</strong> : {movie.Type}
        </p>
        </div>
      </div>
    );
  });

  return (
    <div className="app ">
      <h1>Movie Search App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter movie name"
          value={getName}
          onChange={handleInput}
          required
        />
        <button type="submit" >
          Search
        </button>
      </form>
      <div className="movie-container">{movieCard}</div>
    </div>
  );
};

export default MovieHub;
