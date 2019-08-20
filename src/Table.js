import React from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';
import {} from 'material-icons';

export default class Table extends React.Component {
	
	/**
	 For some reason, I can get the data from this json just fine. I'm just trying to get a list of all
	 users' last names and display it as a list on the page like you see on the Users Page. But for some reason, when I tried the 
	 same thing on our API's Users Json, I get nothing. Which is strange because the json format for both 
	 are exactly the same. I don't know why it can get data from one json but not the other one.
	**/
	
	// This is someone else's json that works.
	state = { persons: [] }
	componentDidMount() {
		//axios.get(`https://jsonplaceholder.typicode.com/users`)
		axios.get(`https://eagleeventplanningapi.azurewebsites.net/ep/users`)
		.then(res => {
			const persons = res.data;
			this.setState({ persons });
		})
	}
	
	/** Our Json, please uncomment if you want to test but comment out the other one
	state = { users: [] }
	componentDidMount() {
		axios.get(`https://eagleeventplanningapi.azurewebsites.net/ep/users`)
		.then(res => {
			const users = res.data;
			this.setState({ users });
		})
	}
	**/

	// This is someone else's json that works.
	render() {
		return (
			<ul>		
				{ this.state.persons.map(person => <li>{person.name}</li>)}
			</ul>
		)
	}
	
	/** Our Json, please uncomment if you want to test but comment out the other one
	render() {
		return (
			<ul>		
				{ this.state.users.map(user => <li>{user.lName}</li>)}
			</ul>
		)
	}
	**/
}