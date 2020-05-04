import React, { Component } from 'react'
import RoomItem from '../components/RoomItem'
import { connect } from 'react-redux'

export class RoomList extends Component {
  render() {
    if (!this.props.rooms) {
      return null
    }
    const rooms = this.props.rooms.map(( room, i ) => <RoomItem key={i} room={ room } />)
    return (
      <div>
        <h1 className="body"><center>DreamFarmer</center></h1><br/>
        <h3>Grow Room List</h3>
        <ul className="body">
          { rooms }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    rooms: state.rooms
  }
}


export default connect(mapStateToProps)(RoomList)