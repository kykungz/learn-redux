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

const DynamicColor = Color.extend`
  color: ${props => {
    if (props.number < -1000) {
      return 'red'
    } else if (props.number < 0) {
      return 'salmon'
    } else if (props.number > 0) {
      return 'lightseagreen'
    } else if (props.number > 1000) {
      return 'limegreen'
    } else {
      return 'black'
    }
  }}
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
        <Color color='red'>
          {props.totalExpense.toLocaleString()}
        </Color>
        บาท
      </Right>
    </h5>
    <h5>
      รวม:
      <Right>
        <DynamicColor className='pulse' number={props.totalIncome - props.totalExpense}>
          {(props.totalIncome - props.totalExpense).toLocaleString()}
        </DynamicColor>
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
