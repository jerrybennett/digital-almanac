import React, { Component } from 'react';
import { searchUrl } from './Resources.js'

export default class Input extends Component {

  state = {
    input: '',
    areaCode: ''
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }


  handleClick = () => {
    this.setState({
      areaCode: this.state.input,
      input: ''
    })
    console.log(searchUrl(this.state.input))
  }

  render() {
  console.log(this.state)
    return (
      <div>
        <input onChange={this.handleChange} type='text' placeholder='Area Code' value={this.state.input}/>
        <button onClick={this.handleClick}>Search</button>
      </div>
    );
  }
}
