// @flow

import * as React from "react";
import './App.css';
import { Page } from "tabler-react";
import SiteWrapper from "./SiteWrapper.react";
import MaterialTable from 'material-table';
import Table from "./Table";

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
	
	const styles = {
	   backgroundColor: 'white',
	   boxShadow: "1px 3px 1px #9E9E9E",
	   padding: "5px",
	}
	
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
			<div style={styles}>
				<h1>PDF Testing</h1>
				<p>Currently, it is unfinished. To generate the pdfs, within the project root, run the command "npx babel-node scripts/generate-pdf.js" and it should generate the pdfs right there. This feature will change later.</p>
				<a href="/tablemarkers">Print Table Markers | </a>
				<a href="/orderbyname">Print Ordered By Name | </a>
				<a href="/orderbytable">Print Ordered By Table</a>
			</div>
		</Page.Content>
    </SiteWrapper>
  );
}

export default Events;
