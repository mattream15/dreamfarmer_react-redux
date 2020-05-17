import React from 'react'
import { connect } from 'react-redux'
import { removePlant } from '../actions/index'
import { Link } from 'react-router-dom';


const PlantItem = ({ plant, room, removePlant }) => {
    return (
    <li className="body">
      <Link to= {`/plants/${plant.id}`} >Strain: {plant.name} </Link><br />
      Category: {plant.species}<br />
      Number of Seeds: { plant.seeds } <br />
      Location: { room.name }<br />
    <button onClick={ () => removePlant(plant.id)}>Recycle Cannabis Plant?</button>
    </li>
    );
}

export default connect (null, { removePlant })(PlantItem)

