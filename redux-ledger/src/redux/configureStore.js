import { createStore, combineReducers } from 'redux'
import ledger from './modules/ledger'

const reducer = combineReducers({
  ledger
})

const configureStore = () => createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore
