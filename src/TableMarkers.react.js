// @flow

import React, { useState, useEffect, Component } from 'react';
import { Button } from "tabler-react";
import axios from 'axios';
import logo from './logo.png';
import MaterialTable from 'material-table';
import {} from 'material-icons';
import Table from './Table';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import './App.css';
import User from './components/User/User';
import Users from './users';

class TableMarkers extends Component {
  state = {
    users:  [],
  }

  componentDidMount() {
        fetch("https://eagleeventplanningapi.azurewebsites.net/ep/eventseating/11")
        .then(res => res.json())
        .then((data) => {
          this.setState({ users: data })
        })
        .catch(console.log)
  }	
  render() {
	const data = [
      { firstName: "John", lastName: "Smath" },
      { firstName: "Paul", lastName: "Smeth" },
      { firstName: "Cody", lastName: "Smith" },
      { firstName: "Jordan", lastName: "Smoth" },
      { firstName: "Jim", lastName: "Smuth" },
    ]
	const styles = {
	   backgroundColor: 'white',
	   boxShadow: "1px 3px 1px #9E9E9E",
	   padding: "5px",
	   marginBottom: "5px",
	}

	const spacing = {
	   padding: "5px",
	}

    const headingAlign = {
    textAlign: 'center',
    padding: '50px',
  }
	
    return (
		<div>
			<div style={styles}>
        <div style={spacing}>
          <Button color="primary" RootComponent="a"> Download PDF </Button>
        </div>

        <div style={spacing}>
				<Button color="primary" RootComponent="a" href="./events"> Back to Events Screen </Button>
        </div>
			</div>

			<div className="TableMarkers">
				<div className='pdf'>
					<h1 style={headingAlign}>Table Markers</h1>
          <div class="Users">
            <Users users={this.state.users} />
          </div>
				</div>
			</div>
		</div>
    );
  }
}

export default TableMarkers;

