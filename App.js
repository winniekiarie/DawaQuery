import React, { useState, useEffect } from "react";

import DrugDataset from "./DrugDataset";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "https://api.fda.gov/drug/ndc.json";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [Drugs, setDrugs] = useState([]);

  useEffect(() => {
    searchDrugs("Prozac");
  }, []);

  const searchDrugs = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setDrugs(data.Search);
  };

  return (
    <div className="app">
      <h1>DawaQuery</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for Drugs"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchDrugs(searchTerm)}
        />
      </div>

      {drugs?.length > 0 ? (
        <div className="container">
          {drugs.map((drug) => (
            <DrugDataset drug={drug} />
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
