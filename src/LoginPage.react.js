// @flow

import React from 'react';
import { Button } from "tabler-react";

function LoginPage() {
	function doSomething(e) {
		alert("You have logged in!")
	}
	
	return (
		<div>
			<div className="alert alert-info">
				Username: test<br />
				Password: test
			</div>
			
				
				
			<div className="col-md-6 ">
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
						<Button color="primary" RootComponent="a" href="./events" onClick={doSomething}> Login </Button>
					</div>
				</form>
			</div>
        </div>
	);
}
export default LoginPage;
