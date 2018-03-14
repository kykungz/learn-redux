import { createStore, combineReducers } from 'redux'
import ledger from './modules/ledger/reducer'

const reducers = combineReducers({
  ledger
})

const configureStore = () => createStore(
  reducers, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore
