import React, { Component } from 'react'
import Input from './Input'
import Button from './Button'
import StyledForm from './StyledForm'

export default class Form extends Component {
  state = {
    tempTodo: '',
  }

  onInputChange = e => {
    this.setState({
      tempTodo: e.target.value,
    })
  }

  submitHandler = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.tempTodo)
    this.setState({ tempTodo: '' })
  }

  render() {
    return (
      <StyledForm
        isNotEmpty={this.state.tempTodo}
        onSubmit={this.submitHandler}
      >
        <Input
          newTodo={this.state.tempTodo}
          onInputChange={this.onInputChange}
        />
        {this.state.tempTodo ? <Button buttonText={'Add new Todo'} /> : null}
      </StyledForm>
    )
  }
}
