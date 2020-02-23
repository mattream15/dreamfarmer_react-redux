export const addPlant = plant => {
  return (dispatch) => {
    return fetch('http://localhost:3000/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({plant: plant})
    })
    .then(resp => resp.json())
    .then(plant => {
      dispatch({type: "ADD_PLANT", payload: plant})
    })
  }
} 

export const removePlant = plantId => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/plants/${plantId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(plant => {
      dispatch({type: "REMOVE_PLANT", payload: plant.id})
    })
  }
}

  export const fetchPlants = () => {
    return (dispatch) => {
      return fetch('http://localhost:3000/plants')
      .then(resp => resp.json())
      .then(plants => {
        dispatch({type: "SET_PLANTS", payload: plants})
      })
    }
  }