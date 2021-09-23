import {
  SET_THEME
} from './actionTypes'

import initialState from './initialState'

const setTheme = (state, action) => {
  return {
    ...state,
    ...action.payload
  }
}

const actionHandler = {
  [SET_THEME]: setTheme
}

const reducer = (state = initialState, action) => {
  const handler = actionHandler[action.type]

  return handler ? handler(state, action) : state
}

export default reducer