import {
  SET_THEME_VALUE,
} from './actionTypes'

import initialState from './initialState'

const setThemeValue = (state, action) => {
  const { path, value } = action.payload
  const newTheme = { ...state }

  let looper = { ...newTheme }
  path.forEach((key, index) => {
    if (index < path.length - 1) {
      if (!looper[key] || looper[key] === undefined) {
        looper[key] = {}
      }
      looper = looper[key]
    }
    else {
      if (!looper) {
        looper = { [key]: value }
      } else {
        looper[key] = value
        Object.assign(looper, { key: value })
      }
    }
  })  

  return newTheme
}

const actionHandler = {
  [SET_THEME_VALUE]: setThemeValue,
}

const reducer = (state = initialState, action) => {
  const handler = actionHandler[action.type]
  
  return handler ? handler(state, action) : state
}

export default reducer