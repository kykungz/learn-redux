import React from 'react'
import { Modal, Input, Button } from 'react-materialize'
import { compose, withStateHandlers } from 'recompose'

const enhance = withStateHandlers(
  // States
  {
    name: 'hi',
    price: 0
  },
  // State Handlers
  {
    handleNameChange: (state, props) => event => ({
      name: event.target.value
    }),
    handlePriceChange: (state, props) => event => ({
      price: parseInt(event.target.value)
    }),
    resetInput: (state, props) => () => ({
      name: '',
      price: 0
    })
  }
)

const BottomModal = (props) => {
  console.log(props.name)
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
      {/*
        normal <input /> is working fine btw. But it cannot have label like the <Input />
        <input value={props.name} onChange={props.handleNameChange} type='text' />
      */}

    </Modal>
  )
}

export default enhance(BottomModal)
