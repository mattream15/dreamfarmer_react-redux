import { combineReducers } from 'redux'
import plant from './PlantsReducer'
import plants from './PlantsReducer'
import room from './RoomsReducer'
import rooms from './RoomsReducer'
//import users from './usersReducer' - look into this


export default combineReducers({
  plant,
  plants,
  room,
  rooms
  //users
})
