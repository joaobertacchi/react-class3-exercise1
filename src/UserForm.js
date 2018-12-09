import React, {Component} from 'react';
import ErrorMessage from './ErrorMessage'

class UserForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
        	user: {
        		firstname: '',
        		lastname: '',
        		username: '',
        		games: 0,
        	},
        };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
    }
  
	handleChange(event) {
		const name = event.target.name;
		const value = event.target.value;
		this.setState((currState, currProps) => ({
			...currState,
        	user: {
				...currState.user,
				[name]: value,
        	},
        })); 
    }
  
	handleSubmit(event) {
		event.preventDefault();
		const user = this.state.user;
		this.props.addUser(user);
    }
 
  	render() {
		const {username, firstname, lastname} = this.state.user;
    	return (
          	<div>
        	<form onSubmit={this.handleSubmit}>
				<input
					name='username'
					type='text'
					value={username}
					placeholder='Username'
					onChange={this.handleChange}
				/>
				<input
					name='firstname'
					type='text'
					value={firstname}
					placeholder='First Name'
					onChange={this.handleChange}
				/>
				<input
					name='lastname'
					type='text'
					value={lastname}
					placeholder='Last name'
					onChange={this.handleChange}
				/>
				<button type='submit' disabled={!username || !firstname || !lastname}>Add</button>
			</form>
			<ErrorMessage display={this.props.displayError} message={`Username ${username} is not available`} />
			</div>
        );
    }
}

export default UserForm;