import React from 'react'
import List from './components/List'
import BottomModal from './components/BottomModal'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
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
        <h1 className='center-align'>บันทึกรายรับ-รายจ่าย ของกองภณ</h1>
        <Grid>
          <GridArea area='a'>
            <List title='รายรับ'
              list={this.props.incomes}
              onRemove={this.props.removeIncome}
              color='green'
            />
          </GridArea>
          <GridArea area='b'>
            <List
              title='รายจ่าย'
              list={this.props.expenses}
              onRemove={this.props.removeExpense}
              color='red'
            />
          </GridArea>
          <GridArea area='c'>
            <div>
              <h4 className='center-align'>สรุป</h4>
              <h4 className='center-align'>รายรับทั้งหมด: 5,200</h4>
              <h4 className='center-align'>รายรับทั้งหมด: 5,200</h4>
            </div>
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
