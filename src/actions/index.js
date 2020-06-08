export const addPlant = plant => {
  console.log(6)
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
      console.log(7)
    })
    console.log(8)
  }
  console.log(9)
} 

export const removePlant = (id) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/plants/${id}`, {
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

  export const fetchPlant = (id) => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/plants/${id}`)
      .then(resp => resp.json())
      .then(plant => {
        dispatch({type: "SET_PLANT", payload: plant})
      })
    }
  }

  export const addRoom = room => {
    return (dispatch) => {
      return fetch('http://localhost:3000/rooms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({room: room})
      })
      .then(resp => resp.json())
      .then(room => {
        dispatch({type: "ADD_ROOM", payload: room})
      })
    }
  } 
  
    export const fetchRooms = () => {
      return (dispatch) => {
        return fetch('http://localhost:3000/rooms')
        .then(resp => resp.json())
        .then(rooms => {
          dispatch({type: "SET_ROOMS", payload: rooms})
        })
      }
    }

    export const fetchRoom = (id) => {
      return (dispatch) => {
        return fetch(`http://localhost:3000/rooms/${id}`)
        .then(resp => resp.json())
        .then(room => {
          dispatch({type: "SET_ROOM", payload: room})
        })
      }
    }