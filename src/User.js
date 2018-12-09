import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => {
	const {username, games} = props;
	return (
		<li>
			<span>{username} played {(props.showGames ? games : '*')} games.</span>
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