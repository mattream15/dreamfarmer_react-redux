import React, { Component } from 'react'

export class PlantShow extends Component {
  constructor(props) {
    super(props);

    let paramsId = parseInt(this.props.match.params.id, 10)
    let plant = props.plants.find( plant => plant.id === paramsId);

    this.state = {
      plant: plant ? plant : { species: 'N/A', name: 'N/A', seeds: 'N/A'}
    }
  }


  render() {
    const { species, name, seeds, roomId } = this.state.plant;
    return (
      <div>
        <h3>{ species }</h3>
        <p>Variety Name: { name }</p>
        <p>Number Of Seeds: { seeds }</p>
        <p>Grow Room: { roomId } </p>
      </div>
    )
  }
}

export default PlantShow






























































































































































