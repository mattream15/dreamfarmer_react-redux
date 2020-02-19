import React, { Component } from 'react'

export class CannabisPlantShow extends Component {
  constructor(props) {
    super(props);

    let paramsId = parseInt(this.props.match.params.id, 10)
    let cannabisPlant = props.cannabisPlants.find( cannabisPlant => cannabisPlant.id === paramsId);

    this.state = {
      cannabisPlant: cannabisPlant ? cannabisPlant : { species: 'N/A', varietyName: 'N/A', numberOfSeeds: 'N/A'}
    }
  }


  render() {
    const { species, varietyName, numberOfSeeds } = this.state.cannabisPlant;
    return (
      <div>
        <h3>{ species }</h3>
        <p>Variety Name: { varietyName }</p>
        <p>Number Of Seeds: { numberOfSeeds }</p>
      </div>
    )
  }
}

export default CannabisPlantShow






























































































































































