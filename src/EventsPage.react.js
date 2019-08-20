// @flow

import * as React from "react";
import "./App.css";
import { Page } from "tabler-react";
import SiteWrapper from "./SiteWrapper.react";
import MaterialTable from "material-table";
import { } from "material-icons";
import { tooltip } from "@material-ui/core";
import { Button } from "tabler-react";

function Events() {

  const [state, setState] = React.useState({
    columns: [
      {
        title: "Event #",
        field: "eventNumber",
        type: "numeric"
      },
      {
        title: "Customer",
        field: "customer"
      },
      {
        title: "Event",
        field: "eventType"
      },
      {
        title: "Date",
        field: "date"
      },
      {
        title: "Time",
        field: "time"
      }
    ],
  });

  const styles = {
	   backgroundColor: 'white',
	   boxShadow: "1px 3px 1px #9E9E9E",
	   padding: "5px",
	}

  const spacing = {
	   padding: "5px",
	}

  return (
    <SiteWrapper>
      <Page.Content>
        <MaterialTable
          title="Events"
          columns={[
            { title: 'Event Name', field: 'eventName' },
            { title: 'Venue Name', field: 'venueName' },
            { title: 'Venue Address', field: 'venueAddress' },
            { title: 'Event Date', field: 'eventDate' },
            { title: 'Table Size', field: 'tableSize' },
            { title: 'Expected Guests', field: 'expectedGuests' },
            { title: '% of Empty Seats', field: 'emptyPercentage' },

          ]}
          data={query =>
            new Promise((resolve, reject) => {
              let url = 'https://eagleeventplanningapi.azurewebsites.net/ep/events'
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

			<div style={styles}>
        <div style={spacing} >
          <Button color="primary" RootComponent="a" href="./addevent"> Create Event </Button>
        </div>
        <div style={spacing} >
          <Button color="primary" RootComponent="a" href="./eventinfo"> Event Info </Button>
        </div>

				<h1>PDF Testing</h1>
				<p>Currently, it is unfinished. To generate the pdfs, within the project root, run the command "npx babel-node scripts/generate-pdf.js" and it should generate the pdfs right there. This feature will change later.</p>

        <div style={spacing} >
        <Button color="primary" RootComponent="a" href="./tablemarkers"> Print Table Markers</Button>
        </div>
        <div style={spacing} >
        <Button color="primary" RootComponent="a" href="./orderbyname"> Print Ordered By Name Report</Button>
        </div>
        <div style={spacing} >
        <Button color="primary" RootComponent="a" href="./orderbytable"> Print Ordered By Table Report</Button>
        </div>
      </div>
      </Page.Content>
    </SiteWrapper>
  );
}

export default Events;
