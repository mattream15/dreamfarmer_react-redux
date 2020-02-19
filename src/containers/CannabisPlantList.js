import React, { Component } from 'react'
import CannabisPlantItem from '../components/CannabisPlantItem'
import { connect } from 'react-redux'

export class CannabisPlantList extends Component {
  render() {
    const cannabisPlants = this.props.cannabisPlants.map(( cannabisPlant, i ) => <CannabisPlantItem key={i} cannabisPlant={ cannabisPlant } />)
    return (
      <div>
        <h3>Cannabis Plant List</h3>
        <ul className="collection">
          { cannabisPlants }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cannabisPlants: state.cannabisPlants
  }
}


export default connect(mapStateToProps)(CannabisPlantList)