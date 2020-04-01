import { combineReducers } from 'redux'
import plants from './PlantsReducer'
import rooms from './RoomsReducer'
//import users from './usersReducer' - look into this


export default combineReducers({
  plants,
  rooms
  //users
})
