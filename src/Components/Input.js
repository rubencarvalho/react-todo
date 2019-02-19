import React, { Component } from 'react'
import StyledInput from './StyledInput'

class Input extends Component {
  render() {
    return (
      <StyledInput
        borderWidth={this.props.newTodo.length}
        value={this.props.newTodo}
        onChange={this.props.onInputChange}
        type="text"
        placeholder="Todo"
      />
    )
  }
}

export default Input
