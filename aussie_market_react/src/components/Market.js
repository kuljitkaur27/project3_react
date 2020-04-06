import React, { Component } from 'react';
import axios from 'axios';

class Market extends Component {
  constructor(){
  super();
  this._handleChange = this._handleChange.bind(this);
  this._handleSubmit = this._handleSubmit.bind(this);
  }

  // Event listener for text change
  _handleChange(event) {

  }

  // Event listener for Search
  _handleSubmit(event) {
    event.preventDefault(); // Stay here and handle the submission with JS.

  }



  render(){
    return(
      <form>
      <h2><u> Login </u></h2>
      <input type="text" text="Username" placeholder="email" onChange={this._handleChange}/>
      <input type="text" text="Password" placeholder="password" onChange={this._handleChange}/>
      <input type="submit" value="Submit" onClick={ this._handleSubmit }/>
      </form>
    );
  }
}

export default Market;
