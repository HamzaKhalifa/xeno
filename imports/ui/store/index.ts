import { createStore, combineReducers } from 'redux'

import themeReducer from './theme/reducer'
import visualBuilderReducer from './visual-builder/reducer'

const reducer = combineReducers({
  theme: themeReducer,
  visualBuilder: visualBuilderReducer
})

const store = createStore(reducer)

export default store