import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from 'react-materialize'

const Price = styled.span`
  font-family: monospace;
  color: ${props => props.color || 'black'};
`

const ListItem = (props) => (
  <tr>
    <td>
      {props.name}
    </td>
    <td className='right-align'>
      <Price color={props.color}>{props.price.toLocaleString()}</Price>
    </td>
    <td className='right-align'>
      <Button onClick={props.onRemove} className='red' waves='light' icon='close' />
    </td>
  </tr>
)

ListItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  color: PropTypes.string,
  onRemove: PropTypes.func
}

export default ListItem
