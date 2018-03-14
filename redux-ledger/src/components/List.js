import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'
import { Table } from 'react-materialize'

const List = (props) => (
  <Table bordered hoverable>
    <thead>
      <tr>
        <th data-field='name'>รายการ</th>
        <th className='right-align' data-field='price'>ราคา</th>
        <th className='center-align' data-field='remove'>ลบ</th>
      </tr>
    </thead>
    <tbody>
      {props.list.map((item, i) =>
        <ListItem key={i} color={props.color} onRemove={() => props.onRemove(i)} {...item} />
      )}
    </tbody>
  </Table>
)

List.propTypes = {
  list: PropTypes.array,
  color: PropTypes.string
}

export default List
