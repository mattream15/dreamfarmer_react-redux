import React, { Component } from 'react'
import RoomItem from '../components/RoomItem'
import { connect } from 'react-redux'
import { fetchRoom } from '../actions/index'

export class RoomShow extends Component {
  componentDidMount(id){
    this.props.fetchRoom(id)
  }

  render() {
    const room = this.props.room
    return (
      <div>
        <h3>Grow Room</h3>
        <ul className="body">
        <RoomItem room={ room } />
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    room: state.room
  }
}

export default connect(mapStateToProps, { fetchRoom })(RoomShow)