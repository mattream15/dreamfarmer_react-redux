import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home'
import PlantNew from './PlantNew'
import NavBar from '../components/NavBar';
import PlantList from './PlantList'
import PlantShow from './PlantShow'
import RoomList from './RoomList'
import RoomShow from './RoomShow'
import { connect } from 'react-redux'
import { fetchPlants } from '../actions/index'
import { fetchRooms } from '../actions/index'

class App extends Component {
  
  // constructor() {
  //   super()

  //    this.state = {
  //      id: 0,
  //      plants: []
  //   }
  // }

  // addPlant = plant => {
  //    plant.id = this.state.id + 1

  //    this.setState({
  //      plants: [...this.state.plants, plant],
  //      id: this.state.id + 1
  //    })
  //  }
  componentDidMount(){
    this.props.fetchPlants()
    this.props.fetchRooms()
  }
  
 render() {
   return (
     <Router>
       <NavBar />
       <div className="App">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/plants/new" render={ routerProps => <PlantNew {...routerProps} addPlant={this.addPlant}/>} />
          <Route exact path="/plants" component={ PlantList } />
          <Route exact path="/plants/:id" render={ routerProps => <PlantShow {...routerProps} plant={this.props.plants.find(plant => plant.id === parseInt(routerProps.match.params.id))}/>} />
          <Route exact path="/rooms" component={ RoomList } />
          <Route exact path="/rooms/:id" render={ routerProps => <RoomShow {...routerProps} room={this.props.rooms.find(room => room.id === parseInt(routerProps.match.params.id))}/>} />
        </Switch>
       </div>
     </Router>
   )
 }
}

const mapStateToProps = state => {
  return {
    plants: state.plants,
    rooms: state.rooms
  }
}

export default connect(mapStateToProps, { fetchPlants, fetchRooms })(App)