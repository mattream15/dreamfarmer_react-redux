import React, { Component } from 'react'
import PlantItem from '../components/PlantItem'

export class PlantShow extends Component {
 
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

    
export default (PlantShow)