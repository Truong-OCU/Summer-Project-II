// @flow

import * as React from "react";
import './App.css';
import { Page, Card, Grid, Form, Button, Dropdown } from "tabler-react";

import SiteWrapper from "./SiteWrapper.react";
import MaterialTable from 'material-table';
import { } from 'material-icons';

function Customers() {

    const [state, setState] = React.useState({
        columns: [
            { title: 'Last Name', field: 'lastName' },
            { title: 'First Name', field: 'firstName' },
            { title: 'Email', field: 'email' },
            { title: 'Admin', field: 'admin' },
        ],
        /*
        data: [{
            lastName: 'McCartney',
            firstName: 'Paul',
            email: 'paulmcc@gmail.com',
            admin: 'true',
        },

        {
            lastName: 'Lennon',
            firstName: 'John',
            email: 'johnlen@gmail.com',
            admin: 'true',
        },

        {
            lastName: 'Starr',
            firstName: 'Ringo',
            email: 'ringosta@gmail.com',
            admin: 'false',
        },

        {
            lastName: 'Harrison',
            firstName: 'George',
            email: 'georgehar@gmail.com',
            admin: 'false',
        },
        ],*/
    });
    return (
        <SiteWrapper>
            <Page.Content>
                <MaterialTable title="Customers"
                    columns={[
                        { title: 'First Name', field: 'fName' },
                        { title: 'Last Name', field: 'lName' },
                        { title: 'Email', field: 'email' },
                        { title: 'Phone', field: 'phone' },
                        { title: 'Address', field: 'address' },
                        { title: 'Active', field: 'active' },
                    ]}
                    data={query =>
                        new Promise((resolve, reject) => {
                            let url = 'https://eagleeventplanningapi.azurewebsites.net/ep/customers'
                            fetch(url)
                                .then(response => response.json())
                                .then(result => {
                                    resolve({
                                        data: result,
                                    })
                                })
                        })
                    }
                    editable={
                        {
                            onRowAdd: newData =>
                                new Promise(resolve => {
                                    setTimeout(() => {
                                        resolve();
                                        const data = [...state.data];
                                        data.push(newData);
                                        setState({ ...state, data });
                                    }, 600);
                                }),
                            onRowUpdate: (newData, oldData) =>
                                new Promise(resolve => {
                                    setTimeout(() => {
                                        resolve();
                                        const data = [...state.data];
                                        data[data.indexOf(oldData)] = newData;
                                        setState({ ...state, data });
                                    }, 600);
                                }),
                            onRowDelete: oldData =>
                                new Promise(resolve => {
                                    setTimeout(() => {
                                        resolve();
                                        const data = [...state.data];
                                        data.splice(data.indexOf(oldData), 1);
                                        setState({ ...state, data });
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