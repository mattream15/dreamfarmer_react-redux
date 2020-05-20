import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'

export class Home extends Component {
  render() {
    return (
      <Alert variant="success">
      <Alert.Heading>Welcome to DreamFarmer!</Alert.Heading>
        <div>
          <p>Whether you are seeking to improve the quality or quantity of your cannabis growth, we have you covered.</p>
          <p>From planting your cannabis seeds to tending them through harvest, DreamFarmer offers 24/7 botanical care with our state of the art cannabis production and processing equipment to ensure maximum results.</p>
          <p>With our customizable production model, you have as much control as you would like in the planting, tending, and harvesting processes to produce the cannabis of your dreams, all at the convenience of our website!</p>
        </div>
      </Alert>
    )
  }
}

export default Home