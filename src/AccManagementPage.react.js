// @flow

import * as React from "react";
import './App.css';
import { Page, Card, Grid, Form, Button, Dropdown } from "tabler-react";

import SiteWrapper from "./SiteWrapper.react";
import MaterialTable from 'material-table';
import {} from 'material-icons';

function AccManagement() {
	    const [state, setState] = React.useState({
        columns: [
            { title: 'Last Name', field: 'lastName' },
            { title: 'First Name', field: 'firstName' },
            { title: 'Email', field: 'email' },
            { title: 'Admin', field: 'admin' },
        ],
        data: [{
                lastName: 'McCartney',
                firstName: 'Paul',
                email: 'paulmcc@gmail.com',
                admin: 'true',
            }
        ],
    });
  return (
    <SiteWrapper>
		<Page.Content>
			<
			MaterialTable title = "Account Management"
			columns = { state.columns }
			data = { state.data }
			editable = {
				{
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data[data.indexOf(oldData)] = newData;
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

export default AccManagement;