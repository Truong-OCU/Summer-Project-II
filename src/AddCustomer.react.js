// @flow

import React, { useState, useEffect } from 'react';
import { Button } from "tabler-react";
import axios from 'axios';
import logo from './logo.png';
import MaterialTable from 'material-table';
import {} from 'material-icons';
import Table from './Table';


function AddCustomer() {
	
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
				<h2>Create Customer</h2>
				<form name="form">
					<div>
						<label>First Name</label>
						<input type="text" className="form-control" name="username"/>
					</div>
							
					<div>
						<label>Last Name</label>
						<input type="password" className="form-control" name="password"/>
					</div>

          <div>
						<label>Email</label>
						<input type="password" className="form-control" name="password"/>
					</div>

          <div>
						<label>Phone</label>
						<input type="password" className="form-control" name="password"/>
					</div>

          <div>
						<label>Address</label>
						<input type="password" className="form-control" name="password"/>
					</div>

          <div>
						<label>Is Active</label>
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

export default AddCustomer;

