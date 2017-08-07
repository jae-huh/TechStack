import { combineReducers } from 'redux'

import libraryReducer from './library-reducer'

export default combineReducers({
  libraries: libraryReducer,
})
