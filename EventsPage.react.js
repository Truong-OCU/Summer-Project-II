// @flow

import * as React from "react";
import "./App.css";
import { Page } from "tabler-react";
import SiteWrapper from "./SiteWrapper.react";
import MaterialTable from "material-table";
import { } from "material-icons";
import { tooltip } from "@material-ui/core";

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
    /*
    data: [
      {
        eventNumber: "1235",
        customer: "Mike Bickers",
        eventType: "Meeting",
        date: "05/05/20",
        time: "4:00"
      },

      {
        eventNumber: "1236",
        customer: "David Slaughter",
        eventType: "Meeting",
        date: "05/19/20",
        time: "1:00"
      },

      {
        eventNumber: "1237",
        customer: "Mark Payne",
        eventType: "Wedding",
        date: "05/18/20",
        time: "2:00"
      },

      {
        eventNumber: "1239",
        customer: "Bob Dewey",
        eventType: "Wedding",
        date: "05/05/20",
        time: "5:30"
      }
    ]*/
  });

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


        <button>
          Event Info
        </button>

      </Page.Content>
    </SiteWrapper>
  );
}

export default Events;
