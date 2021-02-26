import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Applications from "./Pages/Applications";
import Explore from "./Pages/Explore";
import Feed from "./Pages/Feed";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserAuthenticated: false,
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return this.state.isUserAuthenticated ? (
                <Redirect to="/home" />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/applications" component={Applications} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/feed" component={Feed} />
        </Switch>
      </Router>
    );
  }
}

export default App;
