import * as types from './types'

// Action Creators
export const addIncome = (payload) => ({
  type: types.ADD_INCOME,
  payload
})

export const removeIncome = (id) => ({
  type: types.REMOVE_INCOME,
  id
})

export const addExpense = (payload) => ({
  type: types.ADD_EXPENSE,
  payload
})

export const removeExpense = (id) => ({
  type: types.REMOVE_EXPENSE,
  id
})
