export const addCannabisPlant = cannabisPlant => {
  return (dispatch) => {
    return fetch('http://localhost:3000/cannabis_plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({cannabisPlant: cannabisPlant})
    })
    .then(resp => resp.json())
    .then(cannabisPlant => {
      dispatch({type: "ADD_CANNABIS_PLANT", payload: cannabisPlant})
    })
  }
} 

export const removeCannabisPlant = cannabisPlantId => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/cannabisPlants/${cannabisPlantId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(cannabisPlant => {
      dispatch({type: "REMOVE_CANNABIS_PLANT", payload: cannabisPlant.id})
    })
  }
}

  export const fetchCannabisPlants = () => {
    return (dispatch) => {
      return fetch('http://localhost:3000/cannabis_plants')
      .then(resp => resp.json())
      .then(cannabisPlants => {
        dispatch({type: "SET_CANNABIS_PLANTS", payload: cannabisPlants})
      })
    }
  }