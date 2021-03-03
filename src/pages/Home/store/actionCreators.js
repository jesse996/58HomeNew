import { constants as actionType } from './index'

export const changeCity = (payload) => {
  return {
    type: actionType.CHANGE_CITY,
    payload
  }
}

export const changeAddress = (payload) => {
  return {
    type: actionType.CHANGE_ADDRESS,
    payload
  }
}

export const changePois = (payload) => {
  return {
    type: actionType.CHANGE_POIS,
    payload
  }
}