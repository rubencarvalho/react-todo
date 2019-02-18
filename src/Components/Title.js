import React, { Component } from 'react'

class Title extends Component {
  render() {
    const { text, type } = this.props
    const Headline = type
    return <Headline>{text}</Headline>
  }
}
export default Title
