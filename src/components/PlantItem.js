import React from 'react'
import { connect } from 'react-redux'
import { removePlant } from '../actions/index'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const PlantItem = ({ plant, removePlant }) => {
    return (
    <li className="body">
      <Link to= {`/plants/${plant.id}`} >Strain: {plant.name} </Link><br />
      Category: {plant.species}<br />
      Number of Seeds: { plant.seeds } <br />
      Location: { /*room.name*/ }<br />
    <Button variant="success" onClick={ () => removePlant(plant.id)}>Recycle Cannabis Plant?</Button>
    </li>
    );
}

export default connect (null, { removePlant })(PlantItem)

