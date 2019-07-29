import React from 'react';
import './App.css';

import MaterialTable from 'material-table';
import {} from 'material-icons';

export default function App() {
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
        ],
    });

    return ( <
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
    );
}