import React from 'react'
import List from './components/List'
import BottomModal from './components/BottomModal'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as ledgerActions from './redux/modules/ledger'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1em;
`

const Padding = styled.div`
  padding: 1em;
`

const App = (props) => {
  return (
    <Padding>
      <h1 className='center-align'>บันทึกรายรับ-รายจ่าย ของกองภณ</h1>
      <Grid>
        <List list={props.incomes} onRemove={props.removeIncome} color='green' />
        <List list={props.expenses} onRemove={props.removeExpense} color='red' />
        <h4 className='center-align'>สรุป</h4>
      </Grid>
      <BottomModal header='เพิ่มรายการ' onConfirm={props.addIncome} />
    </Padding>
  )
}

App.propTypes = {
  incomes: PropTypes.array,
  expenses: PropTypes.array,
  removeIncome: PropTypes.func,
  removeExpense: PropTypes.func,
  addIncome: PropTypes.func
}

const mapStateToProps = (state) => ({
  ...state.ledger
})

const mapDispatchToProps = {
  ...ledgerActions
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
