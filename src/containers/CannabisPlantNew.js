import React, { Component } from 'react'
import { addCannabisPlant } from '../actions/index'
import { connect } from 'react-redux'

export class CannabisPlantNew extends Component {

  constructor(props) {
    super(props);

    this.state = {
      species: '',
      varietyName: '',
      numberOfSeeds: ''
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
        <div className="input-field">
          <input type="text" name="species" id="species" value={ this.state.species } onChange={ this.handleChange }/>
          <label htmlFor="species">Species</label>
        </div>
        <div className="input-field">
          <input type="text" name="varietyName" id="varietyName" value={ this.state.varietyName } onChange={ this.handleChange }/>
          <label htmlFor="varietyName">Variety Name</label>
        </div>
        <div className="input-field">
          <input type="text" name="numberOfSeeds" id="numberOfSeeds" value={ this.state.numberOfSeeds } onChange={ this.handleChange }/>
          <label htmlFor="numberOfSeeds">Number Of Seeds</label>
        </div>

        <input type="submit" value="Create Cannabis Plant" className="btn" />
      </form>
    )
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