import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

const RoomItem = ({ room }) => {
    return (
    <li className="collection-item">
      <Link to= {`/rooms/${room.id}`} >Location: {room.name} </Link><br />
      { room.plants.map(plant => <p>Name: {plant.id}</p>)}
    </li>
    );
}

export default connect (null)(RoomItem)