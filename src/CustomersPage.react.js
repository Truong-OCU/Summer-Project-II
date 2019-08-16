// @flow

import * as React from "react";
import './App.css';
import { Page, Card, Grid, Form, Button, Dropdown } from "tabler-react";

import SiteWrapper from "./SiteWrapper.react";
import MaterialTable from 'material-table';
import {} from 'material-icons';

function Customers() {
	    const [state, setState] = React.useState({
        columns: [
            { title: 'Last Name', field: 'lastName' },
            { title: 'First Name', field: 'firstName' },
			{ title: 'Address', field: 'address' },
			{ title: 'Phone', field: 'phone' },
            { title: 'Email', field: 'email' },
			{ title: 'Active', field: 'isActive' },
        ],
        data: [{
                lastName: 'McCartney',
                firstName: 'Paul',
				address: 'North Street',
				phone: '405-123-4567',
                email: 'paulmcc@gmail.com',
				isActive: 'True',
            },

            {
                lastName: 'Lennon',
                firstName: 'John',
				address: 'South Street',
				phone: '405-123-4567',				
                email: 'johnlen@gmail.com',
				isActive: 'True',
            },

            {
                lastName: 'Starr',
                firstName: 'Ringo',
				address: 'East Street',
				phone: '405-123-4567',
                email: 'ringosta@gmail.com',
				isActive: 'True',
            },

            {
                lastName: 'Harrison',
                firstName: 'George',
				address: 'West Street',
				phone: '405-123-4567',
                email: 'georgehar@gmail.com',
				isActive: 'True',
            },
        ],
    });
  return (
    <SiteWrapper>
		<Page.Content>
			<
			MaterialTable title = "Customers"
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

export default Customers;