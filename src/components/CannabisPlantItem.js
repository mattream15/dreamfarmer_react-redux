import React from 'react'
import { Link } from 'react-router-dom';

const CannabisPlantItem = ({ cannabisPlant }) => {
    return (
    <li className="collection-item">
      Cannabis Plant: {cannabisPlant.species}<br />
      Variety Name: { cannabisPlant.varietyName } <br />
      Number of Seeds: { cannabisPlant.numberOfSeeds } <br />
      <Link to={`/cannabisPlants/${cannabisPlant.id}`}>View</Link>
    </li>
    );
}

export default CannabisPlantItem