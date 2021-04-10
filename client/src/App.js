import axios from "axios";
import { checkSession } from "components/authComponents/authFunctions";
import AuthPage from "pages/AuthPage";
import React from "react";
import componentQueries from "react-component-queries";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { EmptyLayout, LayoutRoute, MainLayout } from "./components/Layout";
import PageSpinner from "./components/PageSpinner";
import AddPostingPage from "./pages/AddPosting";
import EditApplicationPage from "./pages/EditApplication";
import { createBrowserHistory } from "history";

import "./styles/reduction.scss";

const AddCompaniesModal = React.lazy(() => import("pages/AddCompaniesModal"));
const FeedPage = React.lazy(() => import("pages/FeedPage"));
const ExplorePage = React.lazy(() => import("pages/ExplorePage"));
const DashboardPage = React.lazy(() => import("pages/DashboardPage"));
const ContactsPage = React.lazy(() => import("pages/ContactsPage"));
const ApplicationsPage = React.lazy(() => import("pages/ApplicationsPage"));

axios.defaults.withCredentials = true;

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split("/").pop()}`;
};

const history = createBrowserHistory();

class App extends React.Component {
  componentDidMount() {
    checkSession(this);
  }

  state = { id: null, role: null };

  render() {
    const { id } = this.state;

    return (
      <BrowserRouter basename={getBasename()} history={history}>
        <Switch>
          {!id ? (
            <LayoutRoute
              exact
              path={["/", "/login"]}
              layout={EmptyLayout}
              component={() => <AuthPage app={this} />}
            />
          ) : (
            <MainLayout breakpoint={this.props.breakpoint} app={this}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route
                  exact
                  path="/dashboard"
                  component={() => (
                    <DashboardPage app={this} history={history} />
                  )}
                />
                <Route
                  exact
                  path="/companies-modal"
                  component={() => <AddCompaniesModal />}
                />
                <Route exact path="/feed" component={() => <FeedPage />} />
                <Route
                  exact
                  path="/apply"
                  component={() => <ApplicationsPage history={history} />}
                />
                <Route
                  exact
                  path="/explore"
                  component={() => <ExplorePage />}
                />
                <Route
                  exact
                  path="/posting/add"
                  component={() => <AddPostingPage />}
                />
                <Route
                  exact
                  path="/application/:id/edit"
                  component={() => <EditApplicationPage />}
                />
                <Route
                  exact
                  path="/contacts"
                  component={() => (
                    <ContactsPage id={this.state.id} history={history} />
                  )}
                />
              </React.Suspense>
            </MainLayout>
          )}
        </Switch>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: "xs" };
  }

  if (576 < width && width < 767) {
    return { breakpoint: "sm" };
  }

  if (768 < width && width < 991) {
    return { breakpoint: "md" };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: "lg" };
  }

  if (width > 1200) {
    return { breakpoint: "xl" };
  }

  return { breakpoint: "xs" };
};

export default componentQueries(query)(App);
