// @flow

import * as React from "react";
import { Page, Grid, GalleryCard, Form } from "tabler-react";
import SiteWrapper from "./SiteWrapper.react";
import Table from "./Table";
import './App.css';
import MaterialTable from 'material-table';
import {} from 'material-icons';
import { Button } from "tabler-react";

function UsersPage() {
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
	
  return (
    <SiteWrapper>
      <Page.Content>
        <MaterialTable
          title="Users"
          columns={[
            { title: 'First Name', field: 'fName' },
            { title: 'Last Name', field: 'lName' },
            { title: 'Email', field: 'email' },

          ]}
          data={query =>
            new Promise((resolve, reject) => {
              let url = 'https://eagleeventplanningapi.azurewebsites.net/ep/users'
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
        <Button color="primary" RootComponent="a" href="./adduser"> Add User </Button>
			</div>

      </Page.Content>
    </SiteWrapper>
  );
}


export default UsersPage;
