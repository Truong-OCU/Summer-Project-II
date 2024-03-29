import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Error400,
  Error401,
  Error403,
  Error404,
  Error500,
  Error503,
} from "./pages";

import EventsPage from "./EventsPage.react";
import CustomersPage from "./CustomersPage.react";
import UsersPage from "./UsersPage.react";
import LoginPage from "./LoginPage.react";
import AccManagementPage from "./AccManagementPage.react";
import TableMarkers from "./TableMarkers.react";
import OrderByName from "./OrderByName.react";
import OrderByTable from "./OrderByTable.react";
import AddEvent from "./AddEvent.react";
import AddCustomer from "./AddCustomer.react";
import AddUser from "./AddUser.react";
import EventInfo from "./EventInfoPage.react";
import "tabler-react/dist/Tabler.css";

type Props = {||};

function App(props: Props): React.Node {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/400" component={Error400} />
          <Route exact path="/401" component={Error401} />
          <Route exact path="/403" component={Error403} />
          <Route exact path="/404" component={Error404} />
          <Route exact path="/500" component={Error500} />
          <Route exact path="/503" component={Error503} />
          <Route exact path="/customers" component={CustomersPage} />
          <Route exact path="/events" component={EventsPage} />
          <Route exact path="/users" component={UsersPage} />
          <Route exact path="/accmanagement" component={AccManagementPage} />
          <Route exact path="/tablemarkers" component={TableMarkers} />
          <Route exact path="/orderbytable" component={OrderByTable} />
          <Route exact path="/orderbyname" component={OrderByName} />
          <Route exact path="/addevent" component={AddEvent} />
          <Route exact path="/addcustomer" component={AddCustomer} />
          <Route exact path="/adduser" component={AddUser} />
          <Route exact path="/eventinfo" component={EventInfo} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
