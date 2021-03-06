// export default(state= [], action) => { 
//     switch(action.type){
//       case "SET_ROOMS":
//         return [...action.payload]
//       case "SET_ROOM":
//         return [...action.payload]
//       case "ADD_ROOM":
//         return [...state, action.payload]
//       case "REMOVE_ROOM":
//         let newRooms = state.filter(room => room.id !== action.payload)
//         return {...newRooms}
//       //case "EDIT_ROOM"
//       //find the cannabis plant id, make edits, return the cannabis plant
//     default:
//       return state
//   }
// }
 
export function roomsReducer (state = [], action){
  switch(action.type){
    case "SET_ROOMS":
      return [...action.payload]
    case "SET_ROOM":
      return [...action.payload]
    case "ADD_PLANT":
      return state.map(room => {
        if (room.id === action.payload.room.id) { 
          return { 
            ...room,
            plants: [...room.plants, action.payload] 
           }
        }
        else {
          return room
        }
      })
    case "ADD_ROOM":
      return [...state, action.payload]
    case "REMOVE_ROOM":
      return state.filter(room => room.id !== action.payload)
    //case "EDIT_ROOM"
    //find the cannabis plant id, make edits, return the cannabis plant
    default:
      return state
  }
}
