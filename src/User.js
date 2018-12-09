import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => {
	const {username, firstname, lastname, games} = props;
	return (
		<li>
			<span>{username}</span>
			<span>{firstname}</span>
			<span>{lastname}</span>
			<span>{games}</span>
		</li>
    ); 
}

User.propTypes = {
	username: PropTypes.string.isRequired,
	firstname: PropTypes.string.isRequired,
	lastname: PropTypes.string.isRequired,
	games: PropTypes.number.isRequired,
}

export default User;