import React, { Component } from 'react';
//import React from 'react'
import { connect } from 'react-redux'
import { removePlant } from '../actions/index'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';     

const INITIAL_STATE = {
  likes: 0
}

export class PlantItem extends Component {

  constructor(props) {
    super(props);

    this.state = INITIAL_STATE
  }

    handleLikeChange = () => {
      console.log("hello")
      this.setState({likes: this.state.likes + 1})
    }
    
    render() {
      return (
        <div>
          <li><Link to= {`/plants/${this.props.plant.id}`}>Strain: {this.props.plant.name} </Link><Button onClick={ this.handleLikeChange}>Like</Button>Likes: {this.state.likes} </li>
          <li>Category: {this.props.plant.species}</li>
          <li>Number of Seeds: { this.props.plant.seeds }</li>
          <li><Link to= {`/rooms/${this.props.plant.room_id}`}> Location: {this.props.plant.name} Room</Link></li>
          <Button variant="success" onClick={ () => removePlant(this.props.plant.id)}>Recycle Cannabis Plant?</Button>
       </div>
      );
    }
}

{/* const PlantItem = ({ plant, removePlant }) => { */}

//   handleLikeChange = e => {
//     this.setState({likes: e.target.value + 1})
//   }

//     return (
//       <Fragment>
//         <li><Link to= {`/plants/${plant.id}`}>Strain: {plant.name} </Link><Button onClick= "handleLikeChange" value="Like" className="btn"></li>
//         <li>Category: {plant.species}</li>
//         <li>Number of Seeds: { plant.seeds }</li>
//         <li><Link to= {`/rooms/${plant.room_id}`}> Location: {plant.name} Room</Link></li>
//         <Button variant="success" onClick={ () => removePlant(plant.id)}>Recycle Cannabis Plant?</Button>
//     </Fragment>
//     );
// }

export default connect (null, { removePlant })(PlantItem)

