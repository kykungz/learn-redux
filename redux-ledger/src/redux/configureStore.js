import { createStore, combineReducers } from 'redux'
import ledgerReducer from './modules/ledger/reducer'

const reducers = combineReducers({
  ledgerReducer
})

const configureStore = () => createStore(
  reducers, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore
