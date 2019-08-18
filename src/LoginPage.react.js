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
	

/**
	// POST: Create Data
	async function add(e) {
		try {
			const response = await axios.post('https://eagleeventplanningapi.azurewebsites.net/ep/api/Event', );
			console.log('Returned data:', response);
		} catch (e) {
			console.log(`Axios request failed: ${e}`);
		}
	}
	
	// PUT: Edit Data
	// Note: Where id is the event id.
	async function edit(e) {
		try {
			const response = await axios.post('https://eagleeventplanningapi.azurewebsites.net/ep/api/Event/' + id, );
			console.log('Returned data:', response);
		} catch (e) {
			console.log(`Axios request failed: ${e}`);
		}
	}
	
	// DELETE: Delete Data
	// Note: Where id is the event id.
	async function remove(e) {
		try {
			const response = await axios.delete('https://eagleeventplanningapi.azurewebsites.net/ep/api/ApiWithActions/' + id, );
			console.log('Returned data:', response);
		} catch (e) {
			console.log(`Axios request failed: ${e}`);
		}
	}
**/
	
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

// <Button color="primary" RootComponent="a" href="./events" onClick={handle}> Login </Button>


// Original Login

/**
//import React from 'react';

//import { userService } from '../_services';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        userService.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false,
            loading: false,
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password, returnUrl } = this.state;

        // stop here if form is invalid
        if (!(username && password)) {
            return;
        }

        this.setState({ loading: true });
        userService.login(username, password)
            .then(
                user => {
                    const { from } = this.props.location.state || { from: { pathname: "/" } };
                    this.props.history.push(from);
                },
                error => this.setState({ error, loading: false })
            );
    }

    render() {
        const { username, password, submitted, loading, error } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <div className="alert alert-info">
                    Username: test<br />
                    Password: test
                </div>
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" disabled={loading}>Login</button>
                        {loading &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                    </div>
                    {error &&
                        <div className={'alert alert-danger'}>{error}</div>
                    }
                </form>
            </div>
        );
    }
}

export { LoginPage }; 
**/

