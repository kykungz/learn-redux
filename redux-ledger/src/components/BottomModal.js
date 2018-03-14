import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Input, Button } from 'react-materialize'

class BottomModal extends React.Component {
  static propTypes = {
    header: PropTypes.string,
    onConfirm: PropTypes.func
  }

  state = {
    name: '',
    price: 0
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value })
  }

  handlePriceChange = (event) => {
    const value = parseInt(event.target.value.replace(/,/g, ''))
    this.setState(prevState => ({
      price: (value > Number.MAX_SAFE_INTEGER ? prevState.price : value) || 0
    }))
  }

  resetInput = () => {
    this.setState({
      name: '',
      price: 0
    })
  }

  render () {
    return (
      <Modal
        header={this.props.header}
        bottomSheet
        trigger={
          <Button
            style={{position: 'fixed', right: '24px', bottom: '24px'}}
            floating
            large
            waves='light'
            icon='add'
          />
        }
        actions={
          <div>
            <Button onClick={this.resetInput} modal='close' flat className='grey lighten-5'>
              ยกเลิก
            </Button>
            <Button onClick={this.props.onConfirm} modal='close' waves='light'>
              เพิ่ม
            </Button>
          </div>
        }
      >
        <Input value={this.state.name} onChange={this.handleNameChange} label='รายการ' />
        <Input value={this.state.price.toLocaleString()} onChange={this.handlePriceChange} label='ราคา' />
      </Modal>
    )
  }
}

export default BottomModal
