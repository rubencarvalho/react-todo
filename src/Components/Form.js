import React, { Component } from 'react'
import Input from './Input'
import Button from './Button'

export default class Form extends Component {
  render() {
    const { onSubmit, onInputChange, newTodo } = this.props

    return (
      <form onSubmit={onSubmit}>
        <Input newTodo={newTodo} onInputChange={onInputChange} />
        {newTodo ? <Button buttonText={'Add new Todo'} /> : null}
      </form>
    )
  }
}
