import React, { Component } from 'react'
import { addCannabisPlant } from '../actions/index'
import { connect } from 'react-redux'

export class CannabisPlantNew extends Component {

  constructor(props) {
    super(props);

    this.state = {
      species: '',
      name: '',
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
    // add the pet
    //this.props.addCannabisPlant( this.state );
    // redirect to /pets
    this.props.history.push('/cannabisPlants');
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
      <h3>Create Cannabis Plant</h3>
        <div className="select-species"></div>
        <label for="species">Type: </label>                
          <select id="species">
            <option>Sativa</option>
            <option>Indica</option>
            <option>Hybrid</option>
          </select>
      <div className="select-name"></div>        
      <label for="name">Variety Name: </label>
          <select id="name">
            { handleSpeciesChange }
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
}

handleSpeciesChange = event => { 
  this.newCannabisPlantSpecies = document.getElementById('species')
  this.newCannabisPlantSpecies.addEventListener('change', this.handleSpeciesChange.bind(this))
  this.newCannabisPlantVarietyName = document.getElementById('name')       
  if (event.target.value === 'Sativa') {
      const sativaOptions = ['Ghost Train Haze', 'Sour Diesel', 'Casey Jones', 'Blue Dream', 'Maui Wowie']
      const newOptions = sativaOptions.map(option => `<option>${option}</option>`)
      this.newCannabisPlantVarietyName.innerHTML = newOptions.join('')
  } else if (event.target.value === 'Indica') {
      const indicaOptions = ['Strawberry Banana', 'Dark Star', 'Kosher Kush', 'Sunset Sherbert', 'Northern Lights']
      const newOptions = indicaOptions.map(option => `<option>${option}</option>`)
      this.newCannabisPlantVarietyName.innerHTML = newOptions.join('')
  } else {
      const hybridOptions = ['Cannatonic', 'Three Blue Kings', 'Larry Bird Kush', 'White Widow', 'Pineapple Express']
      const newOptions = hybridOptions.map(option => `<option>${option}</option>`)
      this.newCannabisPlantVarietyName.innerHTML = newOptions.join('')
  }
}

// longer version of mapping dispatch to props
// const mapDispatchToProps = dispatch => {
//   return {
//     addCannabisPlant: cannabisPlant => dispatch(addCannabisPlant(cannabisPlant))
//   }
// }

// export default connect(null, mapDispatchToProps)(CannabisPlantNew)


// syntactic sugar
export default connect(null, { addCannabisPlant })(CannabisPlantNew)