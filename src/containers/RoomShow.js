import React, { Component } from 'react'
import RoomItem from '../components/RoomItem'

export class RoomShow extends Component {
  render() {
    if (!this.props.room) {
      return null
    }
    const room = this.props.room
    return (
      <div>
        <h1 className="body"><center>DreamFarmer</center></h1><br/>
        <h3>Grow Room</h3>
        <ul className="body">
        <RoomItem room={ room } />
        </ul>
      </div>
    )
  }
}

export default (RoomShow)