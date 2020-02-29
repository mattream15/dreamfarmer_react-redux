import React, { Component } from 'react'

export class RoomShow extends Component {
  constructor(props) {
    super(props);

    let paramsId = parseInt(this.props.match.params.id, 10)
    let room = props.rooms.find( room => room.id === paramsId);

    this.state = {
      room: room ? room : { name: 'N/A'}
    }
  }

  componentDidMount(){
    this.props.fetchRooms()
}

  render() {
    const { name } = this.state.room;
    return (
      <div>
        <h3>{ name }</h3>
      </div>
    )
  }
}

export default RoomShow