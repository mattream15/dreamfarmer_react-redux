import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import PlantNew from './containers/PlantNew';
import NavBar from './components/NavBar';
import PlantList from './containers/PlantList';
import PlantShow from './containers/PlantShow';

class App extends Component {
  
  //constructor() {
    //super()

    // this.state = {
    //   id: 0,
    //   cannabisPlants: []
    //}
  //}

  addPlant = plant => {
     plant.id = this.state.id + 1

     this.setState({
       plants: [...this.state.plants, plant],
       id: this.state.id + 1
     })
   }
  
 render() {
   return (
     <Router>
       <NavBar />
       <div className="container">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/plants/new" render={ props => <PlantNew {...props} addPlant={this.addPlant}/>} />
          <Route exact path="/plants" component={ PlantList } />
          <Route exact path="/plants/:id" render={ props => <PlantShow {...props} plants={this.state.plants}/>} />
        </Switch>
       </div>
     </Router>
   )
 }
}
export default App;
