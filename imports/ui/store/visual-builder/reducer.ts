import {
  SET_VISUAL_BUILDER_VISIBLE,
  SET_PAGES
} from './actionTypes'

import initialState from './initialState'

const setVisualBuilderVisible = (state, action) => {
  console.log('visible', action.payload)
  return {
    ...state,
    visible: action.payload
  }
}

const setPages = (state, action) => {
  return {
    ...state,
    pages: action.payload
  }
}

const actionHandler = {
  [SET_VISUAL_BUILDER_VISIBLE]: setVisualBuilderVisible,
  [SET_PAGES]: setPages,
}

const reducer = (state = initialState, action) => {
  const handler = actionHandler[action.type]
  
  return handler ? handler(state, action) : state
}

export default reducer