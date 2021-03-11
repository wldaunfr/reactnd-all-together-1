import React from 'react';
import PropTypes from 'prop-types';

const UserItem = (props) => (
  <li style={{ listStyleType: 'none' }}>
    <b>{props.username}</b> played <b>{props.showGamesPlayed ? props.gamesPlayed : 'X'}</b> games.
  </li>
)

export default UserItem;

UserItem.propTypes = {
  username: PropTypes.string.isRequired,
  gamesPlayed: PropTypes.number.isRequired,
  showGamesPlayed: PropTypes.bool.isRequired
}
