import React, { Component } from 'react'
import PlantItem from '../components/PlantItem'
import { connect } from 'react-redux'
import { fetchPlant } from '../actions/index'
import { fetchPlants } from '../actions/index'
import { addPlant } from '../actions/index'
import { removePlant } from '../actions/index'


export class PlantShow extends Component {
  componentDidMount(id){
    this.props.fetchPlant(id)
  }

  constructor(props) {
    super(props);

    let paramsId = parseInt(this.props.match.params.id, 10)
    let plant = props.plants.find( plant => plant.id === paramsId);
  }


  render(plant) {
    const { species, name, seeds } = this.props.plant
    return (
      <div>
        <PlantItem plant={ plant } />
        <h3>{ species }</h3>
        <p>Variety Name: { name }</p>
        <p>Number Of Seeds: { seeds }</p>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPlant: () => {
      dispatch(addPlant())
    },
    removePlant: (id) => {
      dispatch(removePlant(id))
    },
    fetchPlant: (id) => {
      dispatch(fetchPlant(id))
    },
    fetchPlants: () => {
      dispatch(fetchPlants())
    }
  }
}
    

export default connect(mapDispatchToProps, { addPlant, removePlant, fetchPlant, fetchPlants })(PlantShow)











































































































































