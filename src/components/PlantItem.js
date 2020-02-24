import React from 'react'
import { connect } from 'react-redux'
import { removePlant } from '../actions/index'

const plantItem = ({ plant, removePlant }) => {
    return (
    <li className="collection-item">
      Cannabis Plant: {plant.species}<br />
      Variety Name: { plant.name } <br />
      Number of Seeds: { plant.seeds } <br />
      Grow Room: { plant.room.name } <br />
    <button onClick={ () => removePlant(plant.id)}>Recycle Cannabis Plant?</button>
    </li>
    );
}

export default connect (null, { removePlant })(plantItem)