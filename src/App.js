import React from 'react';
import './App.css';

import MaterialTable from 'material-table';
import {} from 'material-icons';

export default function App() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Last Name', field: 'lastName' },
            { title: 'First Name', field: 'firstName' },
            { title: 'Phone', field: 'phone' },
            { title: 'Email', field: 'email' },
            { title: 'Address', field: 'address', },
        ],
        data: [{
                lastName: 'Bickers',
                firstName: 'Wayne',
                phone: '(123) 546-7891',
                email: 'wbickers@gmail.com',
                address: '10th Street',
            },

            {
                lastName: 'Wayne',
                firstName: 'Bob',
                phone: '(586) 781-9465',
                email: 'bwayne@gmail.com',
                address: '11th Street',
            },

            {
                lastName: 'Payne',
                firstName: 'Dillon',
                phone: '(789) 621-2351',
                email: 'dpayne@gmail.com',
                address: '12th Street',
            },

            {
                lastName: 'Howe',
                firstName: 'Mike',
                phone: '(123) 369-3275',
                email: 'mhowe@gmail.com',
                address: '13th Street',
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