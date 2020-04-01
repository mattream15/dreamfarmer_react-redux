import React, { Component } from 'react'
import RoomItem from '../components/RoomItem'
import { connect } from 'react-redux'
import { fetchRoom } from '../actions/index'

export class RoomShow extends Component {
  componentDidMount(id){
    console.log('id is', id)
    this.props.fetchRoom(id)
  }

  render() {
    if (!this.props.room) {
      return null
    }
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
  debugger
  return {
    room: state.room
  }
}

export default connect(mapStateToProps, { fetchRoom })(RoomShow)