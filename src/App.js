import React, { useState, useEffect } from "react";
import Drugdataset from "./Drugdataset"; // Corrected import statement
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "https://api.fda.gov/drug/event.json?api_key=SflnWaVafz0VgqQ6heGBGqF66vIaTP5gqOLzkZzY&search=...";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchDrugs("Asprin");
  }, []);

  const searchDrugs = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search); // Corrected function name
  };

  return (
    <div className="app">
      <h1>DrugQuery</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for drugs"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchDrugs(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((drug) => ( // Changed 'drugs' to 'movies' here
            <Drugdataset drug={drug} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No drugs found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
