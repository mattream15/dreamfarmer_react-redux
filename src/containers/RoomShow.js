import React, { Component } from 'react'
import RoomItem from '../components/RoomItem'
import { connect } from 'react-redux'
import { fetchRoom } from '../actions/index'

export class RoomShow extends Component {
    componentDidMount(){
        this.props.fetchRoom(id)
    }

  constructor(props) {
    super(props);

    let paramsId = parseInt(this.props.match.params.id, 10)
    let room = props.rooms.find( room => room.id === paramsId);
  }

 

  render() {
    const room = this.props.room
    return (
        <RoomItem room={ room } />
    )
    return (
      <div>
        <h3>{ name }</h3>
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