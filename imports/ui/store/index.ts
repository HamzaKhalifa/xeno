import { createStore, combineReducers } from 'redux'

import themeReducer from './theme/reducer'

const reducer = combineReducers({
  theme: themeReducer
})

const store = createStore(reducer)

export default store