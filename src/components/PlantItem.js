import React, { Fragment } from 'react';
//import React from 'react'
import { connect } from 'react-redux'
import { removePlant } from '../actions/index'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const PlantItem = ({ plant, removePlant }) => {

    return (
      <Fragment>
        <li><Link to= {`/plants/${plant.id}`}>Strain: {plant.name} </Link></li>
        <li>Category: {plant.species}</li>
        <li>Number of Seeds: { plant.seeds }</li>
        <li><Link to= {`/rooms/${plant.room_id}`}> Location: {plant.name} Room</Link></li>
        <Button variant="success" onClick={ () => removePlant(plant.id)}>Recycle Cannabis Plant?</Button>
    </Fragment>
    );
}

export default connect (null, { removePlant })(PlantItem)

