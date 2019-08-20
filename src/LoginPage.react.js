// @flow

import React, { useState, useEffect } from 'react';
import { Button } from "tabler-react";
import axios from 'axios';
import logo from './logo.png';
import MaterialTable from 'material-table';
import {} from 'material-icons';
import Table from './Table';


function LoginPage() {
	var id = ''; // Placeholder variable
	
	function handle(e) { // If this alert pops up, the button works.
		//alert("Test: You have logged in")
	}
	
	// API Testing Starts Here!
	const [data, setData] = useState({ hits: [] });
	const [state, setState] = React.useState(
	{
		columns: [
			{ title: 'ID', field: 'id', },
            { title: 'Planner ID', field: 'plannerID' },
			{ title: 'Customer ID', field: 'customerID' },
			{ title: 'Event Name', field: 'eventName' },
		],	
        data: [ // This is unused but keeping it just in case for testing.
			{ id: '1', plannerID: '1', customerID: '2', eventName: 'Meeting' },
			{ id: '2', plannerID: '2', customerID: '2', eventName: 'Conference'},			
        ],
	
    });
	
	// GET: Get Event
	// 'useEffect' is equivalent of componentDidMount().
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get( 'https://hn.algolia.com/api/v1/search?query=redux', );
			//const result = await axios.get('https://eagleeventplanningapi.azurewebsites.net/ep/events', );
			setData(result);
		};
		fetchData();
	}, []);
	
	return (
		<div>
			<div className="alert alert-info">
				Username: test<br />
				Password: test
			</div>
				
				
			<div className="col-md-6 ">
				<img src={logo} />
				<h2>Login</h2>
				<form name="form">
					<div>
						<label>Username</label>
						<input type="text" className="form-control" name="username"/>
					</div>
							
					<div>
						<label>Password</label>
						<input type="password" className="form-control" name="password"/>
					</div>
							
					<div>
						<Button color="primary" RootComponent="a" href="./events" onClick={handle}> Login </Button>
					</div>
				</form>
			</div>
        </div>
	);
}
export default LoginPage;

