// @flow

import * as React from "react";
import { Page, Grid, GalleryCard, Form } from "tabler-react";
import SiteWrapper from "./SiteWrapper.react";
import Table from "./Table";
import './App.css';
import MaterialTable from 'material-table';
import {} from 'material-icons';

function UsersPage() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Last Name', field: 'lastName' },
            { title: 'First Name', field: 'firstName' },
			{ title: 'username', field: 'username' },
            { title: 'Email', field: 'email' },
            { title: 'Admin', field: 'admin' },
			{ title: 'Active', field: 'isActive' },
        ],
        data: [{
                lastName: 'McCartney',
                firstName: 'Paul',
				username: 'PaulMC',
                email: 'paulmcc@gmail.com',
                admin: 'true',
				isActive: 'true',
            },

            {
                lastName: 'Lennon',
                firstName: 'John',
				username: 'JLen',
                email: 'johnlen@gmail.com',
                admin: 'true',
				isActive: 'true',
            },

            {
                lastName: 'Starr',
                firstName: 'Ringo',
				username: 'Starrr',
                email: 'ringosta@gmail.com',
                admin: 'false',
				isActive: 'true',
            },

            {
                lastName: 'Harrison',
                firstName: 'George',
				username: 'Harrig',
				email: 'georgehar@gmail.com',
                admin: 'false',
				isActive: 'true',
            },
        ],
    });
	
  return (
    <SiteWrapper>
		<Page.Content>
			<div>
				<h3>Table Testing Starts Here</h3>
				<Table/>
				<h3>Table Testing Ends Here </h3>
			</div>
		
			<
			MaterialTable title = "Users"
			columns = { state.columns }
			data = { state.data }
			editable = {
            {
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data.push(newData);
                            setState({...state, data });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data[data.indexOf(oldData)] = newData;
                            setState({...state, data });
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data.splice(data.indexOf(oldData), 1);
                            setState({...state, data });
                        }, 600);
                    }),
				}
			}
			/>
		</Page.Content>
    </SiteWrapper>
  );
}

export default UsersPage;
