import React from 'react'
import List from './components/List'
import BottomModal from './components/BottomModal'
import Summary from './components/Summary'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CardPanel } from 'react-materialize'
import * as ledgerActions from './redux/modules/ledger'

const Grid = styled.div`
  display: grid;
  grid-template-areas: 'a b c';
  grid-column-gap: 1em;

  @media (max-width: 1024px) {
    grid-template-areas:
      'a b'
      'c c';
  }

  @media (max-width: 768px) {
    grid-template-areas:
      'a'
      'b'
      'c';
  }
`

const GridArea = styled.div`
  grid-area: ${props => props.area};
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
        <h1 className='center-align'>บันทึกรายรับ-รายจ่าย<br />ของกองภณ</h1>
        <Grid>
          <GridArea area='a'>
            <CardPanel className='green lighten-5'>
              <List
                title='รายรับ'
                list={this.props.incomes}
                onRemove={this.props.removeIncome}
                color='limegreen'
              />
            </CardPanel>
          </GridArea>
          <GridArea area='b'>
            <CardPanel className='red lighten-5'>
              <List
                title='รายจ่าย'
                list={this.props.expenses}
                onRemove={this.props.removeExpense}
                color='red'
              />
            </CardPanel>
          </GridArea>
          <GridArea area='c'>
            <CardPanel className='grey lighten-5'>
              <Summary
                totalIncome={this.props.incomes.reduce((acc, cur) => acc + cur.price, 0)}
                totalExpense={this.props.expenses.reduce((acc, cur) => acc + cur.price, 0)}
              />
            </CardPanel>
          </GridArea>
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
