import React, { Component } from 'react'
import { addPlant } from '../actions/index'
import { connect } from 'react-redux'
const INITIAL_STATE = {
  species: 'Sativa',     
  options: ['Ghost Train Haze', 'Sour Diesel', 'Casey Jones', 'Blue Dream', 'Maui Wowie'],
  seeds: '1',
  name: 'Ghost Train Haze'
  roomId: 'Ghost Train Haze Room'
}
export class PlantNew extends Component {

  constructor(props) {
    super(props);

    this.state = INITIAL_STATE
  }

  // handleChange = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addPlant ( this.state )
    this.setState(INITIAL_STATE)
    this.props.history.push('/plants');
    
  }

  handleSeedChange = e => {
    this.setState({seeds: e.target.value})
  }

  handleVarietyNameChange = e => {
    this.setState({name: e.target.value})
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
      <h3>Create Cannabis Plant</h3>
        <div className="body"></div>
        <label htmlFor="species">Species: </label>          
          <select id="species" onChange = { this.handleSpeciesChange } value={this.state.species}>
            <option>Sativa</option>
            <option>Indica</option>
            <option>Hybrid</option>
          </select>
      <div className="body"></div>        
      <label htmlFor="name">Variety Name: </label>          
        <select id="name" onChange={this.handleVarietyNameChange}>
            { this.renderOptions() }
          </select>
      <div className="body"></div>
      <label htmlFor="seeds">Seeds: </label>          
        <select id="seeds" onChange={this.handleSeedChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
          <div className="body"></div>        
      <label htmlFor="roomId">Grow Room: </label>          
        <select id="roomId" onChange={this.handleRoomChange}>
            { this.renderRoomSelection() }
          </select>  
      <input type="submit" value="Create Cannabis Plant" className="btn" />
    </form>
    )
  }

  handleSpeciesChange = event => {
    this.setState({species: event.target.value})
    if (event.target.value === 'Sativa') {
      this.setState({
        options: ['Ghost Train Haze', 'Sour Diesel', 'Casey Jones', 'Blue Dream', 'Maui Wowie'],
      }, () => (this.setState({name: this.state.name[0]}))) 
  } else if (event.target.value === 'Indica') {
      this.setState({
        options:['Strawberry Banana', 'Dark Star', 'Kosher Kush', 'Sunset Sherbert', 'Northern Lights'],
      }, () => (this.setState({name: this.state.name[0]})) )
  } else {
    this.setState({
      options:['Cannatonic', 'Three Blue Kings', 'Larry Bird Kush', 'White Widow', 'Pineapple Express'],
    }, () => (this.setState({name: this.state.name[0]})))    
  }
}

  renderOptions() {
    return this.state.options.map(varietyName => (<option key= {varietyName}> {varietyName}</option>))  
  }
}

handleRoomChange = event => {
  this.setState({name: event.target.value})
  if (event.target.value === 'Ghost Train Haze') {
    this.setState({
      roomId: 'Ghost Train Haze Room',
    }, () => (this.setState({roomId: this.state.roomId}))) 
} else if (event.target.value === 'Sour Diesel') {
  this.setState({
    roomId: 'Sour Diesel Room',
  }, () => (this.setState({roomId: this.state.roomId})))
} else if (event.target.value === 'Sour Diesel') {
  this.setState({
    roomId: 'Sour Diesel Room',
  }, () => (this.setState({roomId: this.state.roomId})))
} else if (event.target.value === 'Casey Jones') {
  this.setState({
    roomId: 'Casey Jones Room',
  }, () => (this.setState({roomId: this.state.roomId})))
} else if (event.target.value === 'Blue Dream') {
  this.setState({
    roomId: 'Blue Dream Room',
  }, () => (this.setState({roomId: this.state.roomId})))
} else if (event.target.value === 'Maui Wowie') {
  this.setState({
    roomId: 'Maui Wowie Room',
  }, () => (this.setState({roomId: this.state.roomId})))
} else if (event.target.value === 'Strawberry Banana') {
  this.setState({
    roomId: 'Strawberry Banana Room',
  }, () => (this.setState({roomId: this.state.roomId})))
} else if (event.target.value === 'Dark Star') {
  this.setState({
    roomId: 'Dark Star Room',
  }, () => (this.setState({roomId: this.state.roomId})))
} else if (event.target.value === 'Kosher Kush') {
  this.setState({
    roomId: 'Kosher Kush Room',
  }, () => (this.setState({roomId: this.state.roomId})))
} else if (event.target.value === 'Sunset Sherbert') {
  this.setState({
    roomId: 'Sunset Sherbert Room',
  }, () => (this.setState({roomId: this.state.roomId})))
} else if (event.target.value === 'Northern Lights') {
  this.setState({
    roomId: 'Northern Lights Room',
  }, () => (this.setState({roomId: this.state.roomId})))
} else if (event.target.value === 'Cannatonic') {
  this.setState({
    roomId: 'Cannatonic Room',
  }, () => (this.setState({roomId: this.state.roomId})))
} else if (event.target.value === 'Three Blue Kings') {
  this.setState({
    roomId: 'Three Blue Kings Room',
  }, () => (this.setState({roomId: this.state.roomId})))
} else if (event.target.value === 'Larry Bird Kush') {
  this.setState({
    roomId: 'Larry Bird Kush Room',
  }, () => (this.setState({roomId: this.state.roomId})))
} else if (event.target.value === 'White Widow') {
  this.setState({
    roomId: 'White Widow Room',
  }, () => (this.setState({roomId: this.state.roomId})))

} else {
  this.setState({
    roomId: "Pineapple Express Room",
  }, () => (this.setState({roomId: this.state.roomId})))    
}
}

renderRoomSelection() {
  return this.state.roomId  
}
}

export default connect(null, { addPlant })(PlantNew)