import * as types from './types'

// Initial State
const initialState = {
  incomes: [{name: 'เงินเดือน', price: 15000}, {name: 'ขโมยเงิน', price: 40}],
  expenses: [{name: 'ค่าเทอม', price: 64000}, {name: 'ป๊อปคอร์น', price: 99}]
}

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.ADD_INCOME:
      return {
        ...state,
        incomes: [...state.incomes, action.payload]
      }
    case types.ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, {
          name: action.payload.name,
          price: Math.abs(action.payload.price)
        }]
      }
    case types.REMOVE_INCOME:
      return {
        ...state,
        incomes: state.incomes.filter((item, i) => i !== action.id)
      }
    case types.REMOVE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((item, i) => i !== action.id)
      }
    default:
      return state
  }
}
