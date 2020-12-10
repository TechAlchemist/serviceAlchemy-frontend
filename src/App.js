import { useState } from "react";

import Nav from "./components/Nav/Nav";


import HomePage from "./pages/HomePage/HomePage";
import DashboardPage from "./pages/DashboardPage/Dashboard";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import CustomerOpenTicketsPage from './pages/CustomerPages/OpenTickets';
import CustomerClosedTicketsPage from './pages/CustomerPages/ClosedTickets';
import CustomerNewTicketPage from './pages/CustomerPages/NewTicket';


import { Switch, Route, withRouter, Redirect } from "react-router-dom";

import { getUser, logout } from "./services/userService";

import "./App.css";

function App(props) {
  /* component state */
  const [userState, setUserState] = useState({ user: getUser() });

  /* helper functions */

  function handleSignupOrLogin() {
    // place user into state using the setter function
    setUserState({ user: getUser() });
    // programmatically route user to dashboard
    props.history.push("/dashboard");
  }

  function handleLogout() {
    logout();
    setUserState({ user: null });
    props.history.push("/");
  }

  return (
    <div className="App">
      <Nav user={userState.user} handleLogout={handleLogout} />
      <Switch>
        <Route exact path="/" render={(props) => <HomePage />} />
        <Route
          exact path="/dashboard"
          render={(props) =>
            getUser() ? <DashboardPage /> : <Redirect to="/login" />
          }
        />
        <Route
          exact path="/signup"
          render={(props) => (
            <SignupPage handleSignupOrLogin={handleSignupOrLogin} />
          )}
        />
        <Route
          exact path="/login"
          render={(props) => (
            <LoginPage handleSignupOrLogin={handleSignupOrLogin} />
          )}
        />
        <Route
          exact path="/dashboard/openTickets"
          render={(props) => (
            < CustomerOpenTicketsPage />
          )}
        />
        <Route
          exact path="/dashboard/closedTickets"
          render={(props) => (
            < CustomerClosedTicketsPage />
          )}
        />
        <Route
          exact path="/dashboard/newTicket"
          render={(props) => (
            < CustomerNewTicketPage user={userState.user}/>
          )}
        />
        <Route component={NotFoundPage} />

      </Switch>
    </div>
  );
}

export default withRouter(App);
