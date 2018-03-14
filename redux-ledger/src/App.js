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

class App extends React.Component {
  static propTypes = {
    incomes: PropTypes.array,
    expenses: PropTypes.array,
    removeIncome: PropTypes.func,
    removeExpense: PropTypes.func,
    addIncome: PropTypes.func,
    addExpense: PropTypes.func
  }

  addItem = (name, price) => {
    if (price > 0) {
      this.props.addIncome({ name, price })
    } else {
      this.props.addExpense({ name, price })
    }
  }

  render () {
    return (
      <Padding>
        <h1 className='center-align'>บันทึกรายรับ-รายจ่าย ของกองภณ</h1>
        <Grid>
          <List list={this.props.incomes} onRemove={this.props.removeIncome} color='green' />
          <List list={this.props.expenses} onRemove={this.props.removeExpense} color='red' />
          <h4 className='center-align'>สรุป</h4>
        </Grid>
        <BottomModal header='เพิ่มรายการ' onConfirm={this.addItem} />
      </Padding>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.ledger
})

const mapDispatchToProps = {
  ...ledgerActions
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
