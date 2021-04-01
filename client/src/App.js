import {EmptyLayout, LayoutRoute, MainLayout} from "./components/Layout";
import PageSpinner from "./components/PageSpinner";
import AuthPage from "pages/AuthPage";
import React from "react";
import componentQueries from "react-component-queries";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import "./styles/reduction.scss";

import {checkSession} from "components/authComponents/authFunctions";

const AddCompaniesModal = React.lazy(() => import("pages/AddCompaniesModal"));
const FeedPage = React.lazy(() => import("pages/FeedPage"));
const ExplorePage = React.lazy(() => import("pages/ExplorePage"));
const DashboardPage = React.lazy(() => import("pages/DashboardPage"));
const ContactsPage = React.lazy(() => import("pages/ContactsPage"));
const ApplicationsPage = React.lazy(() => import("pages/ApplicationsPage"));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split("/").pop()}`;
};

class App extends React.Component {
  componentDidMount() {
    checkSession(this);
  }

  state = {email: null, name: null};

  render() {
    const {email} = this.state;

    return (
      <BrowserRouter basename={getBasename()}>
        <Switch>
          {!email ? (
            <LayoutRoute
              exact
              path={["/", "/login"]}
              layout={EmptyLayout}
              component={(props) => <AuthPage app={this}/>}
            />
          ) : (
            <MainLayout breakpoint={this.props.breakpoint} app={this}>
              <React.Suspense fallback={<PageSpinner/>}>
                <Route exact path="/" component={(props) => <DashboardPage app={this}/>}/>
                <Route
                  exact
                  path="/companies-modal"
                  component={AddCompaniesModal}
                />
                <Route exact path="/feed" component={FeedPage}/>
                <Route
                  exact
                  path="/applications"
                  component={ApplicationsPage}
                />
                <Route exact path="/explore" component={ExplorePage}/>
                <Route exact path="/contacts" component={ContactsPage}/>
              </React.Suspense>
            </MainLayout>
          )}
          <Redirect to="/"/>)
        </Switch>
      </BrowserRouter>
    );
  }
}

const query = ({width}) => {
  if (width < 575) {
    return {breakpoint: "xs"};
  }

  if (576 < width && width < 767) {
    return {breakpoint: "sm"};
  }

  if (768 < width && width < 991) {
    return {breakpoint: "md"};
  }

  if (992 < width && width < 1199) {
    return {breakpoint: "lg"};
  }

  if (width > 1200) {
    return {breakpoint: "xl"};
  }

  return {breakpoint: "xs"};
};

export default componentQueries(query)(App);
