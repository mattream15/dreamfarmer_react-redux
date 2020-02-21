import React, { Component } from 'react'
import { addCannabisPlant } from '../actions/index'
import { connect } from 'react-redux'

export class CannabisPlantNew extends Component {

  constructor(props) {
    super(props);

    this.state = {
      species: '',
      name: '',
      options: ['Ghost Train Haze', 'Sour Diesel', 'Casey Jones', 'Blue Dream', 'Maui Wowie'],
      seeds: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push('/cannabisPlants');
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
      <h3>Create Cannabis Plant</h3>
        <div className="select-species"></div>
        <label for="species">Type: </label>                
          <select id="species" onChange = { this.handleSpeciesChange }>
            <option>Sativa</option>
            <option>Indica</option>
            <option>Hybrid</option>
          </select>
      <div className="select-name"></div>        
      <label for="name">Variety Name: </label>
          <select id="name">
            { this.renderOptions() }
          </select>
      <div className="select-seeds"></div>
      <label for="seeds">Number of Seeds: </label>
          <select id="seeds" >
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
        <input type="submit" value="Create Cannabis Plant" className="btn" />
      </form>
    )
  }

  handleSpeciesChange = event => {
    if (event.target.value === 'Sativa') {
      this.setState({
        options: ['Ghost Train Haze', 'Sour Diesel', 'Casey Jones', 'Blue Dream', 'Maui Wowie'],
      }) 
  } else if (event.target.value === 'Indica') {
      this.setState({
        options:['Strawberry Banana', 'Dark Star', 'Kosher Kush', 'Sunset Sherbert', 'Northern Lights'],
      })
  } else {
    this.setState({
      options:['Cannatonic', 'Three Blue Kings', 'Larry Bird Kush', 'White Widow', 'Pineapple Express'],
    })    
  }
}

  renderOptions() {
    return this.state.options.map(option => <option>${option}</option>)
  }
}

export default connect(null, { addCannabisPlant })(CannabisPlantNew)