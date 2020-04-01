import React, { Component } from 'react'
import PlantItem from '../components/PlantItem'
import { connect } from 'react-redux'
import { fetchPlant } from '../actions/index'

export class PlantShow extends Component {
  componentDidMount(id){
    this.props.fetchPlant(id)
  }

  render() {
    if (!this.props.plant) {
      return null
    }
    const plant  = this.props.plant
    return (
      <div>
        <h3>Cannabis Plant</h3>
        <ul className="body">
        <PlantItem plant={ plant } />
        </ul>
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