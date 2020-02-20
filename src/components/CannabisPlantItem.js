import React from 'react'
import { connect } from 'react-redux'
import { removeCannabisPlant } from '../actions/index'

const CannabisPlantItem = ({ cannabisPlant, removeCannabisPlant }) => {
    return (
    <li className="collection-item">
      Cannabis Plant: {cannabisPlant.species}<br />
      Variety Name: { cannabisPlant.name } <br />
      Number of Seeds: { cannabisPlant.seeds } <br />
    <button onClick={ () => removeCannabisPlant(cannabisPlant.id)}>Recycle Cannabis Plant?</button><br />
    </li>
    );
}

export default connect (null, { removeCannabisPlant })(CannabisPlantItem)