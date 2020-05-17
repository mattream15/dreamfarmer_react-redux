import React, { Component } from 'react'
import PlantItem from '../components/PlantItem'
import { connect } from 'react-redux'

class PlantList extends Component {

  render() {
    if (!this.props.plants) {
      return null
    }
    const plants = this.props.plants.map(( plant, i ) => <PlantItem key={i} plant={ plant } />)
    return (
      <div>
        <h1 className="body"><center>DreamFarmer</center></h1><br/>
        <h3>Cannabis Plant List</h3>
        <ul className="body">
          { plants }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    plants: state.plants
  }
}


export default connect(mapStateToProps)(PlantList)