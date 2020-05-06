import React from 'react'
import { connect } from 'react-redux'
import { removeRoom } from '../actions/index'
import { Link } from 'react-router-dom';

const RoomItem = ({ room, removeRoom }) => {
    return (
    <li className="collection-item">
      <Link to= {`/rooms/${room.id}`} >Location: {room.name} </Link><br />
    <button onClick={ () => removeRoom(room.id)}>Repurpose Room?</button>
    </li>
    );
}

export default connect (null, { removeRoom })(RoomItem)