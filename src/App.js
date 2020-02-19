import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import CannabisPlantNew from './containers/CannabisPlantNew';
import NavBar from './components/NavBar';
import CannabisPlantList from './containers/CannabisPlantList';
import CannabisPlantShow from './containers/CannabisPlantShow';

class App extends Component {
  
  constructor() {
    super()

    // this.state = {
    //   id: 0,
    //   cannabisPlants: []
    //}
  }

  // addCannabisPlant = cannabisPlant => {
  //   cannabisPlant.id = this.state.id + 1

  //   this.setState({
  //     cannabisPlants: [...this.state.cannabisPlants, cannabisPlant],
  //     id: this.state.id + 1
  //   })
  // }
  
  
 render() {
   return (
     <Router>
       <NavBar />
       <div className="container">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/cannabisPlants/new" render={ props => <CannabisPlantNew {...props} addCannabisPlant={this.addCannabisPlant}/>} />
          <Route exact path="/cannabisPlants" component={ CannabisPlantList } />
          <Route exact path="/cannabisPlants/:id" render={ props => <CannabisPlantShow {...props} cannabisPlants={this.state.cannabisPlants}/>} />
        </Switch>
       </div>
     </Router>
   )
 }
}
export default App;
