let defaultState = {
  retrieved: false,
  lat: '',
  lon: ''
}

function location(state = defaultState, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      console.log('hit me!', action.payload)
      return {
        ...state, lat: [...state.location.lat, action.payload],
        ...state, lon: [...state.location.lon, action.payload]
      }
      break;


    default:
      return state
  }
}

export default location
