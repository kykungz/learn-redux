/* ledger module for recording income / expense */

// Actions
const ADD_INCOME = 'redux-ledger/ledger/ADD-INCOME'
const REMOVE_INCOME = 'redux-ledger/ledger/REMOVE-INCOME'
const ADD_EXPENSE = 'redux-ledger/ledger/ADD-EXPENSE'
const REMOVE_EXPENSE = 'redux-ledger/ledger/REMOVE-EXPENSE'

// Initial State
const initialState = {
  incomes: [{name: 'เงินเดือน', price: 15000}, {name: 'ขโมยเงิน', price: 40}],
  expenses: [{name: 'ค่าเทอม', price: 2000}, {name: 'ป๊อปคอร์น', price: 99}]
}

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_INCOME:
      return {
        ...state,
        incomes: [
          ...state.incomes,
          {
            name: action.payload.name,
            price: Math.abs(action.payload.price)
          }
        ]
      }
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [
          ...state.expenses,
          {
            name: action.payload.name,
            price: Math.abs(action.payload.price)
          }
        ]
      }
    case REMOVE_INCOME:
      return {
        ...state,
        incomes: state.incomes.filter((item, i) => i !== action.id)
      }
    case REMOVE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((item, i) => i !== action.id)
      }
    default:
      return state
  }
}

// Action Creators
export const addIncome = (payload) => ({
  type: ADD_INCOME,
  payload
})

export const removeIncome = (id) => ({
  type: REMOVE_INCOME,
  id
})

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload
})

export const removeExpense = (id) => ({
  type: REMOVE_EXPENSE,
  id
})
