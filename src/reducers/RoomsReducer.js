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
function createStore(changeState) {
  let state;

function dispatch(action){
  state = changeState(state, action)
  render()
}

function getState() {
  return state;
}

  return {
    dispatch,
    getState
  };
};
 
function changeState(state = [], action){
  switch(action.type){
    case "SET_ROOMS":
      return state = [...action.payload]
    case "SET_ROOM":
      return state = [...action.payload]
    case "ADD_ROOM":
      return state = [...state, action.payload]
    case "REMOVE_ROOM":
      let newRooms = state.filter(room => room.id !== action.payload)
      return state = {...newRooms}
    //case "EDIT_ROOM"
    //find the cannabis plant id, make edits, return the cannabis plant
    default:
      return state
  }
}

function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState();
};
 
let store = createStore(changeState) // createStore takes the reducer reducer as an argument
store.dispatch({ type: '@@INIT' });