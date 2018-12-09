import React from 'react';
import PropTypes from 'prop-types'
import User from './User'

function UserList(props) {
	const users = props.users;
	return (
		<div>
			<h2>User list</h2>
			<ul>
				{users.map(user => (
					<User
						key={user.username}
						username={user.username}
						firstname={user.firstname}
						lastname={user.lastname}
						games={user.games}
					/>
				))}
          </ul>
		</div>
    ); 
}

UserList.propTypes = {
	users: PropTypes.array.isRequired,
}

export default UserList;