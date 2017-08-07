import { combineReducers } from 'redux'

import libraryReducer from './library-reducer'
import selectionReducer from './selection-reducer'

export default combineReducers({
  libraries: libraryReducer,
  selectedLibraryId: selectionReducer,
})
