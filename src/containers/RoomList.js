import React, { Component } from 'react'
import RoomItem from '../components/RoomItem'
import { connect } from 'react-redux'
import { fetchRooms } from '../actions/index'

export class RoomList extends Component {
  componentDidMount(){
    this.props.fetchRooms()
  }

  render() {
    const rooms = this.props.rooms.map(( room, i ) => <RoomItem key={i} room={ room } />)
    return (
      <div>
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


export default connect(mapStateToProps, { fetchRooms })(RoomList)