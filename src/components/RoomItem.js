import React from 'react'
import { connect } from 'react-redux'
import { removeRoom } from '../actions/index'

const roomItem = ({ room, removeRoom }) => {
    return (
    <li className="collection-item">
        Name: {room.name}<br />
      Light Source: {room.light}<br />
      Nutrient: { room.nutrient } <br />
      Relative Humidity: { room.humditiy } <br />
      Temperature: { room.temperature } <br />
      pH: { room.pH } <br />
    <button onClick={ () => removeRoom(room.id)}>Repurpose Room?</button>
    </li>
    );
}

export default connect (null, { removeRoom })(roomItem)