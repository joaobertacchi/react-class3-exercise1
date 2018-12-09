import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './UserForm';
import UserList from './UserList';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
	constructor(props) {
     	super(props);
      	this.state = {
          	users: {},
        	displayError: false,
        };
      	this.addUser = this.addUser.bind(this);
    }
  
	addUser(user) {
		this.setState((currState, currProps) => {
			if (Object.keys(currState.users).includes(user.username)) {
				return {...currState, displayError: true};
            } else {
				return ({
					users: {...currState.users, [user.username]: user},
					displayError: false,
        		})
            }
        });
    }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<UserForm addUser={this.addUser} displayError={this.state.displayError} />
		<UserList users={Object.values(this.state.users)} />
      </div>
    );
  }
}

export default App;
