import React from 'react';

const Drugdataset = ({ drug: { imdbID, year, name, chemicalName, Type } }) => {
  return (
    <div className="drug" key={imdbID}>
      <div>
        <p>{year}</p> {/* Changed 'Year' to 'year' */}
      </div>

      <div>
        <span>{Type}</span>
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default Drugdataset;
