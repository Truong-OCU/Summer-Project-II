// @flow

import * as React from "react";
import './App.css';
import { Page, Card, Grid, Form, Button, Dropdown } from "tabler-react";

import SiteWrapper from "./SiteWrapper.react";
import MaterialTable from 'material-table';
import {} from 'material-icons';

function Customers() {
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
        			<
			MaterialTable title = "Customers"
          columns={[
            { title: 'First Name', field: 'fName' },
            { title: 'Last Name', field: 'lname' },
            { title: 'Email', field: 'email' },
            { title: 'Phone', field: 'phone' },
            { title: 'Address', field: 'address' },
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

			<div style={styles}>
        <Button color="primary" RootComponent="a" href="./addcustomer"> Add Customer </Button>
			</div>

      </Page.Content>
    </SiteWrapper>
  );
}

export default Customers;