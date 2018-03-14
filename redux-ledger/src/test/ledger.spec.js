/* eslint-disable no-undef */
import reducer from '../redux/modules/ledger/reducer'
import * as types from '../redux/modules/ledger/types'

const initialState = {
  incomes: [],
  expenses: []
}

describe('add income', () => {
  describe('should add new item', () => {
    test('when empty', () => {
      const state = initialState
      const action = {
        type: types.ADD_INCOME,
        payload: { name: 'A', price: 1500 }
      }
      const newState = reducer(state, action)
      expect(newState).toEqual({
        incomes: [{ name: 'A', price: 1500 }],
        expenses: []
      })
    })

    test('when not empty', () => {
      const state = {
        incomes: [{ name: 'A', price: 1500 }],
        expenses: []
      }
      const action = {
        type: types.ADD_INCOME,
        payload: { name: 'B', price: 250 }
      }
      const newState = reducer(state, action)
      expect(newState).toEqual({
        incomes: [{ name: 'A', price: 1500 }, { name: 'B', price: 250 }],
        expenses: []
      })
    })
  })
})

describe('add expense', () => {
  describe('should add new item', () => {
    test('when empty', () => {
      const state = initialState
      const action = {
        type: types.ADD_EXPENSE,
        payload: { name: 'A', price: 1500 }
      }
      const newState = reducer(state, action)
      expect(newState).toEqual({
        incomes: [],
        expenses: [{ name: 'A', price: 1500 }]
      })
    })

    test('when not empty', () => {
      const state = {
        incomes: [],
        expenses: [{ name: 'A', price: 1500 }]
      }
      const action = {
        type: types.ADD_EXPENSE,
        payload: { name: 'B', price: 250 }
      }
      const newState = reducer(state, action)
      expect(newState).toEqual({
        incomes: [],
        expenses: [{ name: 'A', price: 1500 }, { name: 'B', price: 250 }]
      })
    })
  })
})

describe('remove income', () => {
  test('should remove matched item', () => {
    const state = {
      incomes: [
        { name: 'A', price: 1500 },
        { name: 'B', price: 250 },
        { name: 'C', price: 300 }
      ],
      expenses: []
    }
    const action = {
      type: types.REMOVE_INCOME,
      id: 1
    }
    const newState = reducer(state, action)
    expect(newState).toEqual({
      incomes: [
        { name: 'A', price: 1500 },
        { name: 'C', price: 300 }
      ],
      expenses: []
    })
  })

  test('should not remove non-exist item', () => {
    const state = {
      incomes: [
        { name: 'A', price: 1500 },
        { name: 'B', price: 250 },
        { name: 'C', price: 300 }
      ],
      expenses: []
    }
    const action = {
      type: types.REMOVE_INCOME,
      id: 6
    }
    const newState = reducer(state, action)
    expect(newState).toEqual(state)
  })
})

describe('remove expense', () => {
  test('should remove matched item', () => {
    const state = {
      incomes: [],
      expenses: [
        { name: 'A', price: 1500 },
        { name: 'B', price: 250 },
        { name: 'C', price: 300 }
      ]
    }
    const action = {
      type: types.REMOVE_EXPENSE,
      id: 1
    }
    const newState = reducer(state, action)
    expect(newState).toEqual({
      incomes: [],
      expenses: [
        { name: 'A', price: 1500 },
        { name: 'C', price: 300 }
      ]
    })
  })

  test('should not remove non-exist item', () => {
    const state = {
      incomes: [],
      expenses: [
        { name: 'A', price: 1500 },
        { name: 'B', price: 250 },
        { name: 'C', price: 300 }
      ]
    }
    const action = {
      type: types.REMOVE_EXPENSE,
      id: 6
    }
    const newState = reducer(state, action)
    expect(newState).toEqual(state)
  })
})
