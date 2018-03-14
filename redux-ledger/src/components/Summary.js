import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Color = styled.span`
  color: ${props => props.color};
  font-family: monospace;
  padding-right: .5em;
`

const Right = styled.span`
  float: right;
`

const Summary = (props) => (
  <div>
    <h3 className='center-align'>สรุป</h3>
    <h5>
      รายรับ:
      <Right>
        <Color color='limegreen'>
          {props.totalIncome.toLocaleString()}
        </Color>
        บาท
      </Right>
    </h5>
    <h5>
      รายจ่าย:
      <Right>
        <Color color='orangered'>
          {props.totalExpense.toLocaleString()}
        </Color>
        บาท
      </Right>
    </h5>
    <h5>
      รวม:
      <Right>
        <Color color='orangered'>
          {(props.totalIncome - props.totalExpense).toLocaleString()}
        </Color>
        บาท
      </Right>
    </h5>
  </div>
)

Summary.propTypes = {
  totalIncome: PropTypes.number,
  totalExpense: PropTypes.number
}

export default Summary
