import React, { Component } from 'react'

export class CannabisPlantShow extends Component {
  constructor(props) {
    super(props);

    let paramsId = parseInt(this.props.match.params.id, 10)
    let cannabisPlant = props.cannabisPlants.find( cannabisPlant => cannabisPlant.id === paramsId);

    this.state = {
      cannabisPlant: cannabisPlant ? cannabisPlant : { species: 'N/A', name: 'N/A', seeds: 'N/A'}
    }
  }


  render() {
    const { species, name, seeds } = this.state.cannabisPlant;
    return (
      <div>
        <h3>{ species }</h3>
        <p>Variety Name: { name }</p>
        <p>Number Of Seeds: { seeds }</p>
      </div>
    )
  }
}

export default CannabisPlantShow






























































































































































