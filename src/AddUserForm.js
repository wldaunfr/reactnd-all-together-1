import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddUserForm extends Component {
  static propTypes = {
    onUserAdded: PropTypes.func.isRequired
  };
  
  state = {
    username: '',
    firstname: '',
    lastname: ''
  };
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value.trim()
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onUserAdded({
      username: this.state.username,
      firstname: this.state.firstname,
      lastname: this.state.lastname
    });
  };

  disableSubmit = () => {
    return this.state.username === '' || this.state.firstname === '' || this.state.lastname === ''
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='username' placeholder='Username' value={this.state.username} onChange={this.handleChange} />
        <input type='text' name='firstname' placeholder='Firstname' value={this.state.firstname} onChange={this.handleChange} />
        <input type='text' name='lastname' placeholder='Lastname' value={this.state.lastname} onChange={this.handleChange} />
        <button type='submit' disabled={this.disableSubmit()}>Add</button>
      </form>
    )
  }
}

export default AddUserForm;
