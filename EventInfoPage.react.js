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
                />
            </Page.Content>
        </SiteWrapper>
    );
}

export default Customers;



export default function App() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Event Planner', field: 'eventPlanner' },
            { title: 'Customer', field: 'customer' },
            { title: 'Event Name', field: 'eventName' },
            { title: 'Event Venue', field: 'eventVenue' },
            { title: 'Event Address', field: 'eventAddress', },
            { title: 'Event Date', field: 'eventDate', },
            { title: 'Time', field: 'time', },
            { title: 'Total Expected Guests', field: 'teGuests', },
        ],
        data: [{
            eventPlanner: 'Paul McCartney',
            customer: 'Wayne Bickers',
            eventName: 'Bickers Wedding',
            eventVenue: '10th Street Church',
            eventAddress: '10th Street',
            eventDate: '05/05/20',
            time: '4:00',
            teGuests: '100'
        },],
    });

    return (
        <MaterialTable
            title="Event Info"
            columns={state.columns}
            data={state.data}
            editable={
                {
                    onRowUpdate: (newData, oldData) =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                const data = [...state.data];
                                data[data.indexOf(oldData)] = newData;
                                setState({ ...state, data });
                            }, 600);
                        }),
                }
            }
        />
    );
}

export default function App() {
    const columns = ["Table #", "First Name", "Last Name", "Role"];

    const data = [
        [1, "Faith", "Kundert", "Bride"],
        [1, "Adrien", "Giacubbo", "Groom"],
        [2, "Brittne", "Giacubbo", ""],
        [2, "Eugene", "Kundert", ""],
        [3, "Coletta", "Klimczak", ""],
        [3, "Gray", "Klimczak", ""],
        [4, "Frannie", "Rock", ""],
    ];

    const options = {
        filterType: "dropdown",
        responsive: "stacked"
    };

    return (
        <div style={
            {
                width: "90%",
                marginLeft: "100px",
                height: "100%",
                position: "absolute"
            }
        } >
            <div style={
                { height: "100%", width: "100%" }
            } >
                <div style={
                    { margin: "40px 96px" }
                } >
                    <MUIDataTable title={"Seating Arrangement"}
                        data={data}
                        columns={columns}
                        options={options}
                    />
                </div >
            </div >
        </div>
    );

    //return <div>a</div>;
}