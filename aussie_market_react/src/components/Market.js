import React, { Component } from 'react';
import axios from 'axios';

class Market extends Component {
  constructor(){
  super();
  this.state = {
        login: []
    };
  this._handleChange = this._handleChange.bind(this);
  this._handleSubmit = this._handleSubmit.bind(this);
  }

  // Event listener for text change
  _handleChange(event) {
    this.setState({[event.target.name]:event.target.value});;
  }

  // Event listener for Search
  _handleSubmit(event) {
    event.preventDefault(); // Stay here and handle the submission with JS.

  }

  render(){
    return(
      <div>
        <h3>Login</h3>
          <form>
            <label>Username</label>
            <input type="text" name="username" onClick={ this._handleChange }/> <br/>
            <label>Password</label>
            <input type="text" name="password" onClick={ this._handleChange }/> <br/><br/>
            <input type="submit" value="Search" onClick={ this._handleSearch }/>

            <input class="buttonColor" type="submit" value="Cancel" onClick={ this._handleCancel } />
          </form>
      </div>
    );
  }
}

export default Market;
