// @flow

import * as React from "react";
import './App.css';
import { Page } from "tabler-react";
import SiteWrapper from "./SiteWrapper.react";
import MaterialTable from 'material-table';
import {} from 'material-icons';

function Events() {
	    const [state, setState] = React.useState({
        columns: [
            { title: 'Event #', field: 'eventNumber', type: 'numeric' },
            { title: 'Customer', field: 'customer' },
            { title: 'Event', field: 'eventType' },
            { title: 'Date', field: 'date' },
            { title: 'Time', field: 'time', },
        ],
        data: [{
                eventNumber: '1235',
                customer: 'Mike Bickers',
                eventType: 'Meeting',
                date: '05/05/20',
                time: '4:00',
            },

            {
                eventNumber: '1236',
                customer: 'David Slaughter',
                eventType: 'Meeting',
                date: '05/19/20',
                time: '1:00',
            },

            {
                eventNumber: '1237',
                customer: 'Mark Payne',
                eventType: 'Wedding',
                date: '05/18/20',
                time: '2:00',
            },

            {
                eventNumber: '1239',
                customer: 'Bob Dewey',
                eventType: 'Wedding',
                date: '05/05/20',
                time: '5:30',
            },
        ],
    });
	
  return (
    <SiteWrapper>
		<Page.Content>
			<
			MaterialTable title = "Events"
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

export default Events;
