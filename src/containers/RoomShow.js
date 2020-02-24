import React, { Component } from 'react'

export class RoomShow extends Component {
  constructor(props) {
    super(props);

    let paramsId = parseInt(this.props.match.params.id, 10)
    let room = props.rooms.find( room => room.id === paramsId);

    this.state = {
      room: room ? room : { name: 'N/A', light: 'N/A', nutrient: 'N/A', humidity: 'N/A', temperature: 'N/A', pH: 'N/A'}
    }
  }


  render() {
    const { name, light, nutrient, humidity, temperature, pH } = this.state.room;
    return (
      <div>
        <h3>{ name }</h3>
        <p>Light Source: { light }</p>
        <p>Nutrient: { nutrient }</p>
        <p>Relative Humidity: { humidity }</p>
        <p>Temperature: { temperature }</p>
        <p>pH: { pH }</p>
      </div>
    )
  }
}

export default RoomShow