import React, { Component } from 'react'
import PlantItem from '../components/PlantItem'
import { connect } from 'react-redux'
import { fetchPlant } from '../actions/index'

export class PlantShow extends Component {
  componentDidMount(){
    this.props.fetchPlant(id)
  }

  constructor(props) {
    super(props);

    let paramsId = parseInt(this.props.match.params.id, 10)
    let plant = props.plants.find( plant => plant.id === paramsId);
  }


  render() {
    const { species, name, seeds } = this.props.plant
    return (
        <PlantItem plant={ plant } />
    )
    return (
      <div>
        <h3>{ species }</h3>
        <p>Variety Name: { name }</p>
        <p>Number Of Seeds: { seeds }</p>
      </div>
    )
  }
}

  const mapStateToProps = state => {
    return {
      plant: state.plant
    }
  }


export default connect(mapStateToProps, { fetchPlant })(PlantShow)





























































































































































