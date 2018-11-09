import React, { Component } from 'react'

export default class SubmitButton extends Component {
  render() {
    return (
      <div>
        <button>{this.props.title}</button>
      </div>
    )
  }
}
