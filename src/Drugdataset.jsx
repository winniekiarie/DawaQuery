import React from 'react';

const Drugdataset = ({ drug: { imdbID,year, name,chemical name, Type } }) => {
  return (
    <div className="drug" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>



      <div>
        <span>{Type}</span>
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default Drugdataset;