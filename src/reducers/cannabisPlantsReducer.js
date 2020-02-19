let id = 0

export default(state= [{species: "Cannabis sativa", varietyName: "Blue Dream", numberOfSeeds: "5"}], action) => {
        const newCannabisPlant = () => {
            return {
                ...action.payload,
                id: id++
            }
        }
        
        switch(action.type){
      //case "SET_CANNABIS_PLANTS":
        //return [...action.payload]
      case "ADD_CANNABIS_PLANT":
        return [...state, newCannabisPlant()]
      case "REMOVE_CANNABIS_PLANT":
        let newCannabisPlants = state.filter(cannabisPlant => cannabisPlant.id !== action.payload)
        return [...newCannabisPlants]
        //case "EDIT_CANNABIS_PLANT"
        //find the cannabis plant id, make edits, return the cannabis plant
      default:
        return state
    }
  }