import React from 'react';

import './PetData.css';

const PetData = ({ pet }) => {
  if (!pet) {
    return null;
  }

  const keys = Object.keys(pet);

  return (
    <div className="PetData">
      {keys.map((key, i) => (
        <div className="PetData__Item" key={i}>
          {key}: {pet[key]}
        </div>
      ))}
    </div>
  );  
}


export default PetData;
