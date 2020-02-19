import { combineReducers } from 'redux'
import cannabisPlants from './cannabisPlantsReducer'
//import growRooms from './growRoomsReducer' - look into this 
//import users from './usersReducer' - look into this


export default combineReducers({
  // cannabisPlants:cannabisPlants this is the same as
  cannabisPlants
  //growRooms,
  //users
})
