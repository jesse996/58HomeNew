import * as actionType from "./constants";

const dafaultstate = {
  city: '北京市'
}

const reducer = (state = dafaultstate, action) => {
  switch (action.type) {
    case actionType.CHANGE_CITY:
      return { ...state, city: action.payload }

    default:
      return state
  }
}

export default reducer