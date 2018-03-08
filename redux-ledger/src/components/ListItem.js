import React from 'react'
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

export default ListItem
