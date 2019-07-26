import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';


// Attempt 1

class EventScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is the Event Screen</Text>
      </View>
    );
  }
}

class CustomersScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is the Customers Screen</Text>
      </View>
    );
  }
}

class UsersScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is the Users Screen</Text>
      </View>
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator({
  Event: EventScreen,
  Customers: CustomersScreen,
  Users: UsersScreen
});

export default createAppContainer(TabNavigator);


// Attempt 2

/**
function Navigator() {
  return (
    <div className="Navigator">
		<header className="Nav-header">
			<div style={{flex: 1, flexDirection: 'row', lineHeight: '15px'}}>
				<ul style={{fontSize: '12px'}}>
					<li>Event</li>
					<li>Customers</li>
					<li>Users</li>
				</ul>
			</div>
		</header>
    </div>
  );
}
export default Navigator;
**/


// Attempt 3

/**
class EventScreen extends React.Component {
  render() {
    return (
		<div className="Event">
		  <header className="Event-header">
			<p> This is the Event Screen. </p>
		  </header>
		</div>
	
    );
  }
}


class CustomersScreen extends React.Component {
  render() {
    return (
		<div className="Customer">
		  <header className="Customer-header">
			<p> This is the Customer Screen. </p>
		  </header>
		</div>
    );
  }
}

class UsersScreen extends React.Component {
  render() {
    return (
		<div className="Users">
		  <header className="Users-header">
			<p> This is the Users Screen. </p>
		  </header>
		</div>
    );
  }
}


const TabNavigator = createMaterialTopTabNavigator({
  Event: { screen: EventScreen },
  Customers: { screen: CustomersScreen },
  Users: { screen: UsersScreen }
});



export default createAppContainer(TabNavigator);
**/





/**
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
**/
