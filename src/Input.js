import React, { Component } from 'react';
import { searchUrl } from './Resources.js'

export default class Input extends Component {

  state = {
    input: ''
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render() {
  console.log(this.state.input)
    return (
      <div>
        <input onChange={this.handleChange} type='text' placeholder='Area Code' value={this.state.input}/>
      </div>
    );
  }
}
