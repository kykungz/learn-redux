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
    price: ''
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value })
  }

  handlePriceChange = (event) => {
    const input = event.target.value.replace(/,/g, '')
    if (input === '-' || input === '0-') {
      this.setState({ price: '-' })
    } else if (input.slice(-1) === '-') {
      const price = (-1 * (parseInt(input.slice(0, -1), 10) || 0)).toLocaleString()
      this.setState(prevState => ({ price }))
    } else {
      this.setState({ price: (parseInt(input, 10) || 0).toLocaleString() })
    }
  }

  resetInput = () => {
    this.setState({
      name: '',
      price: 0
    })
  }

  onConfirm = () => {
    const value = this.state.price.replace(/,/g, '')
    this.props.onConfirm(this.state.name, parseInt(value, 10))
  }

  translate = (price) => {

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
            <Button onClick={this.onConfirm} modal='close' waves='light'>
              เพิ่ม
            </Button>
          </div>
        }
      >
        <Input value={this.state.name} onChange={this.handleNameChange} label='รายการ' />
        <Input value={this.state.price} onChange={this.handlePriceChange} label='ราคา' />
      </Modal>
    )
  }
}

export default BottomModal
