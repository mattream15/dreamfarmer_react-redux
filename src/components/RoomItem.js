import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

const RoomItem = ({ room }) => {
    return (
      <div id="parent">
        <div id="div1"><li><Link to= {`/rooms/${room.id}`} >Location: {room.name} </Link></li></div>
        <div id="div1"><li>{room.plants.map(plant =><Link to= {`/plants/${plant.id}`} >ID: {plant.id}) </Link></li></div>
      </div>
    );
}

export default connect (null)(RoomItem)