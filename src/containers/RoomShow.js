import React, { Component } from 'react'
import RoomItem from '../components/RoomItem'
import { connect } from 'react-redux'
import { fetchRoom } from '../actions/index'
import { fetchRooms } from '../actions/index'
import { addRoom } from '../actions/index'
import { removeRoom } from '../actions/index'

export class RoomShow extends Component {
    componentDidMount(id){
        this.props.fetchRoom(id)
    }

  constructor(props) {
    super(props);

    let paramsId = parseInt(this.props.match.params.id, 10)
    let room = props.rooms.find( room => room.id === paramsId);
  }

 

  render(room) {
    const name = this.props.room
    return (
      <div>
        <RoomItem room={ room } />
        <h3>{ name }</h3>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRoom: () => {
      dispatch(addRoom())
    },
    removeRoom: (id) => {
      dispatch(removeRoom(id))
    },
    fetchRoom: (id) => {
      dispatch(fetchRoom(id))
    },
    fetchRooms: () => {
      dispatch(fetchRooms())
    }
  }
}
    
export default connect(mapDispatchToProps, { addRoom, removeRoom, fetchRoom, fetchRooms })(RoomShow)
