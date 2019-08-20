// @flow

import * as React from "react";
import { Page, Grid, GalleryCard, Form } from "tabler-react";
import SiteWrapper from "./SiteWrapper.react";
import Table from "./Table";
import './App.css';
import MaterialTable from 'material-table';
import {} from 'material-icons';

function EventInfo() {
  const spacing = {
	   padding: "5px",
	}
	
  return (
    <SiteWrapper>
      <Page.Content>
        <div class="EventInfo" style={spacing}>
          <MaterialTable
              title="Event Info"
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
          </div>

          <div class="SeatingArrangment" style={spacing}>
            <MaterialTable
              title="Seating Arrangement"
              columns={[
                { title: 'Table Assignment', field: 'tableAssignment' },
                { title: 'First Name', field: 'fName' },
                { title: 'Last Name', field: 'lName' },
                { title: 'Role', field: 'role' },
              ]}
              data={query =>
                new Promise((resolve, reject) => {
                  let url = 'https://eagleeventplanningapi.azurewebsites.net/ep/eventseating/11'
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
          </div>
      </Page.Content>
    </SiteWrapper>
  );
}


export default EventInfo;
