import React, { Component } from 'react'
import List from './components/List'
import ListItem from './components/ListItem'
import BottomModal from './components/BottomModal'
import styled from 'styled-components'
import { Input, Modal, Button } from 'react-materialize'
import { connect } from 'react-redux'
import {
  addIncome,
  removeIncome,
  addExpense,
  removeExpense
} from './redux/modules/ledger'


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
      <BottomModal />
    </Padding>
  )
}


const mapStateToProps = (state) => ({
  ...state.ledger
})

const mapDispatchToProps = {
  addIncome,
  removeIncome,
  addExpense,
  removeExpense
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
