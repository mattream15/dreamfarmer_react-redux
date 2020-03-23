export default(state= [], action) => { 
      switch(action.type){
        case "SET_PLANTS":
          return [...action.payload]
        case "SET_PLANT":
          return {...action.payload}
        case "ADD_PLANT":
          return [...state, action.payload]
        case "REMOVE_PLANT":
          let newPlants = state.filter(plant => plant.id !== action.payload)
          return {...newPlants}
        //case "EDIT_PLANT"
        //find the cannabis plant id, make edits, return the cannabis plant
      default:
        return state
    }
  }