import {
  SET_VISUAL_BUILDER_VISIBLE,
} from './actionTypes'

import initialState from './initialState'

const setVisualBuilderVisible = (state, action) => {
  return {
    ...state,
    visible: action.payload
  }
}

const actionHandler = {
  [SET_VISUAL_BUILDER_VISIBLE]: setVisualBuilderVisible,
}

const reducer = (state = initialState, action) => {
  const handler = actionHandler[action.type]
  
  return handler ? handler(state, action) : state
}

export default reducer