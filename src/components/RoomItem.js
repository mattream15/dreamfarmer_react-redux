import React from 'react'
import { connect } from 'react-redux'
import { removeRoom } from '../actions/index'

const RoomItem = ({ room, removeRoom }) => {
    return (
    <li className="collection-item">
        Name: {room.name} Room<br />
    <button onClick={ () => removeRoom(room.id)}>Repurpose Room?</button>
    </li>
    );
}

export default connect (null, { removeRoom })(RoomItem)