import React from 'react'
import { Modal, Input, Button } from 'react-materialize'
import { withStateHandlers } from 'recompose'

const enhance = withStateHandlers(
  // States
  {
    name: '',
    price: 0
  },
  // State Handlers
  {
    handleNameChange: (state, props) => event => ({
      name: event.target.value
    }),
    handlePriceChange: (state, props) => event => {
      const value = parseInt(event.target.value.replace(/,/g, ''))
      return {
        price: (value > Number.MAX_SAFE_INTEGER ? state.price : value) || 0
      }
    },
    resetInput: (state, props) => () => ({
      name: '',
      price: 0
    })
  }
)

const BottomModal = (props) => {
  console.log(props.price)
  return (
    <Modal
      header={props.header}
      bottomSheet
      trigger={
        <Button style={{position: 'fixed', right: '24px', bottom: '24px'}} floating large waves='light' icon='add' />
      }
      actions={
        <div>
          <Button onClick={props.resetInput} modal='close' flat className='grey lighten-5'>ยกเลิก</Button>
          <Button onClick={props.onConfirm} modal='close' waves='light'>เพิ่ม</Button>
        </div>
      }
    >
      <Input value={props.name} onChange={props.handleNameChange} label='รายการ' />
      <Input value={props.price.toLocaleString()} onChange={props.handlePriceChange} label='ราคา' />
    </Modal>
  )
}

export default enhance(BottomModal)
