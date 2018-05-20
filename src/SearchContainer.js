import React, { Component } from 'react';
import Input from './Input'

class SearchContainer extends Component {

  // state = {
  //   areaCode: ''
  // }
  //
  // handleClick = (e) => {
  //   console.log(e)
  // }

  render() {
    console.log(this.state)
    return (
      <div>
        <Input handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default SearchContainer
