import * as actionType from "./constants";

const dafaultstate = {
  city: '',
  address: ''
}

const reducer = (state = dafaultstate, action) => {
  switch (action.type) {
    case actionType.CHANGE_CITY:
      return { ...state, city: action.payload }

    case actionType.CHANGE_ADDRESS:
      return { ...state, address: action.payload }
    default:
      return state
  }
}

export default reducer