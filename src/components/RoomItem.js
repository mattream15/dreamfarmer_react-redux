import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

const RoomItem = ({ room }) => {
    return (
    <li className="collection-item">
      <Link to= {`/rooms/${room.id}`} >Location: {room.name} </Link><br />
    </li>
    );
}

export default connect (null)(RoomItem)