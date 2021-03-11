import React, { Component } from 'react';
import AddUserForm from './AddUserForm.js';
import UserList from './UserList.js';

class UserDashboard extends Component {
  state = {
    users: [],
    usernameTaken: false
  }

  handleUserAdded = (user) => {
    const usernameTaken = this.state.users.filter((existingUser) => {
      return existingUser.username === user.username;
    }).length > 0;

    if (usernameTaken) {
      this.setState({
        usernameTaken: true
      });
    } else {
      this.setState((prevState) => {
        return {
          users: [...prevState.users, {...user, gamesPlayed: 0}],
          usernameTaken: false
        };
      });
    }
  }

  render() {
    return (
      <div>
        <AddUserForm onUserAdded={this.handleUserAdded} />
        {this.state.usernameTaken &&
          <p className='error'>Username already taken!</p>
        }
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default UserDashboard;
