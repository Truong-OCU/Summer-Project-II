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

class OrderByTable extends Component {
	
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
	
    return (
		<div>
			<div style={styles}>
				<h1>Download</h1>
				<a href="/events">Back</a>
			</div>
			<div className="OrderByTable">
				<div className='pdf'>
					<h1>Order By Table</h1>
					{ data.map(user => <User user={user} key={user.lastName}/>) }
				</div>
			</div>
		</div>
    );
  }
}

export default OrderByTable;

