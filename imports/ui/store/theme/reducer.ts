import {
  SET_THEME_VALUE,
} from './actionTypes'

import initialState from './initialState'

const setThemeValue = (state, action) => {
  const { path, value } = action.payload
  const newTheme = { ...state }

  console.log('path', path, 'value', value)
  let looper = { ...newTheme }
  path.forEach((key, index) => {
    if (index < path.length - 1) {
      if (!looper[key] || looper[key] === undefined) {
        looper[key] = {}
      }
      looper = looper[key]
      console.log('looper', looper)
    }
    else {
      if (!looper) {
        looper = { [key]: value }
      } else {
        looper[key] = value
        looper.marginBottom = '40px'
        console.log('HERE', key, looper)
      }
    }
  })

  console.log('new theme', newTheme.home.homeContainer.vbData.before)
  

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