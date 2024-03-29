import React, { useState, useEffect } from "react";
import Drugdataset from "./Drugdataset"; // Corrected import statement
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "https://api.fda.gov/drug/event.json?api_key=SflnWaVafz0VgqQ6heGBGqF66vIaTP5gqOLzkZzY&search=";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [drugs, setDrugs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      searchDrugs(searchTerm);
    }
  }, [searchTerm]);

  const searchDrugs = async (title) => {
    try {
      const response = await fetch(`${API_URL}${title}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setDrugs(data.results || []);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again.");
      setDrugs([]);
    }
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

      {error && <div className="error">{error}</div>}

      {drugs?.length > 0 ? (
        <div className="container">
          {drugs.map((drug) => (
            <Drugdataset key={drug.id} drug={drug} /> // Assuming each drug has a unique 'id'
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



