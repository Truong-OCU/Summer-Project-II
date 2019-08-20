// @flow

import React, { useState, useEffect } from 'react';
import { Button } from "tabler-react";
import axios from 'axios';
import logo from './logo.png';
import MaterialTable from 'material-table';
import {} from 'material-icons';
import Table from './Table';


function AddEvent() {
	
	function handle(e) {
	}

  const styles = {
	   backgroundColor: 'white',
	   boxShadow: "1px 3px 1px #9E9E9E",
	   padding: "50px",
	}	
	
	return (
		<div>				
			<div style={styles}>
				<h2>Create Event</h2>
				<form name="form">
					<div>
						<label>Event Planner</label>
						<input type="text" className="form-control" name="username"/>
					</div>
							
					<div>
						<label>Customer</label>
						<input type="password" className="form-control" name="password"/>
					</div>

          <div>
						<label>Event Name</label>
						<input type="password" className="form-control" name="password"/>
					</div>

          <div>
						<label>Venue Name</label>
						<input type="password" className="form-control" name="password"/>
					</div>

          <div>
						<label>Venue Address</label>
						<input type="password" className="form-control" name="password"/>
					</div>

          <div>
						<label>Event Date</label>
						<input type="password" className="form-control" name="password"/>
					</div>

          <div>
						<label>Table Size</label>
						<input type="password" className="form-control" name="password"/>
					</div>

          Expected Guests<div>
						<label>Customer</label>
						<input type="password" className="form-control" name="password"/>
					</div>

          <div>
						<label>Empty Percentage</label>
						<input type="password" className="form-control" name="password"/>
					</div>
							
					<div>
						<Button color="primary" RootComponent="a" onClick={handle}> Submit</Button>
            <Button color="primary" RootComponent="a" href="./events" onClick={handle}>Back</Button>
					</div>
				</form>
			</div>
    </div>
	);
}
export default AddEvent;

