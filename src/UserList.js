import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserItem from './UserItem.js';

class UserList extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired
  }

  state = {
    showGamesPlayed: true
  }

  toggleShowGamesPlayed = () => {
    this.setState((prevState) => {
      return {
        showGamesPlayed: !prevState.showGamesPlayed
      };
    });
  };

  render() {
    return (
      <div>
        <h1>List of Users:</h1>
        <ul style={{ padding: 0 }}>
          {
            this.props.users.map((user) => (
              <UserItem
                key={user.username}
                username={user.username}
                gamesPlayed={user.gamesPlayed}
                showGamesPlayed={this.state.showGamesPlayed} />
            ))
          }
        </ul>
        {
          this.props.users.length > 0 &&
            <button onClick={this.toggleShowGamesPlayed}>
              {this.state.showGamesPlayed ? 'Hide' : 'Show'} the Number of Games Played
            </button>
        }
      </div>
    );
  }
}

export default UserList;
