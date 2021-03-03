import * as actionType from "./constants";

const dafaultstate = {
  city: '',
  address: '',
  pois: []
}

const reducer = (state = dafaultstate, action) => {
  switch (action.type) {
    case actionType.CHANGE_CITY:
      return { ...state, city: action.payload }

    case actionType.CHANGE_ADDRESS:
      return { ...state, address: action.payload }

    case actionType.CHANGE_POIS:
      return { ...state, pois: action.payload }
    default:
      return state
  }
}

export default reducer