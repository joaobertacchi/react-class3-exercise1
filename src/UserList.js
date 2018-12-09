import React, {Component} from 'react';
import PropTypes from 'prop-types'
import User from './User'

class UserList extends Component {
	constructor(props) {
      super(props);
      this.state = {
        showGames: false,
      };
      this.handleShowGames = this.handleShowGames.bind(this);
    }
	handleShowGames() {
      this.setState((currState, currProps) => {
        return {
          showGames: !currState.showGames,
        }
      })
    }
  
	render() {
	const users = this.props.users;
	return (
		<div>
			<h1>User list</h1>
			<button onClick={this.handleShowGames}>{( this.state.showGames ? 'Hide the Number of Games Played' : 'Show the Number of Games Played')}</button>
			<ul>
				{users.map(user => (
					<User
						key={user.username}
						username={user.username}
						firstname={user.firstname}
						lastname={user.lastname}
						games={user.games}
						showGames={this.state.showGames}
					/>
				))}
          </ul>
		</div>
    );
	}
}

UserList.propTypes = {
	users: PropTypes.array.isRequired,
}

export default UserList;