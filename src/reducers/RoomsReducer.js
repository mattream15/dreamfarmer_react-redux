export default(state= [], action) => { 
    switch(action.type){
      case "SET_ROOMS":
        return [...action.payload]
      case "ADD_ROOM":
        return [...state, action.payload]
      case "REMOVE_ROOM":
        let newRooms = state.filter(room => room.id !== action.payload)
        return [...newRooms]
      //case "EDIT_ROOM"
      //find the cannabis plant id, make edits, return the cannabis plant
    default:
      return state
  }
}