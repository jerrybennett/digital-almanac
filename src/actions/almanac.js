import AlmanacAPI from "../services/almanacAPI"

export function fetchLocation() {
  return function(dispatch) {
    AlmanacAPI.fetchLocation()
    .then(location => {
      dispatch({
        type: "FETCHED_MESSAGES",
        payload: location
      })
    })
  }
}
