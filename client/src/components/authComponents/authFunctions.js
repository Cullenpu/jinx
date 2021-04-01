// Functions to help with user actions.
import axios from "axios";

// environment configutations
import ENV from "config.js";
const API_HOST = ENV.api_host;
// console.log('Current environment:', ENV.env)

// Send a request to check if a user is logged in through the session cookie
export const checkSession = (app) => {
  const url = `${API_HOST}/users/check-session`;

  if (!ENV.use_frontend_test_user) {
    axios
      .get(url)
      .then((res) => {
        if (res.status === 200 && res.data.email) {
          app.setState({ email: res.data.email, name: res.data.name });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    console.log("Using test user!");
    app.setState({ email: ENV.email, name: ENV.name });
  }
};

// A function to send a POST request with the user to be logged in
export const login = (credentials, app) => {
  const url = `${API_HOST}/users/login`;

  axios
    .post(url, credentials)
    .then((res) => {
      if (res.status === 200 && res.data.email !== undefined) {
        app.setState({ email: res.data.email, name: res.data.name });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// A function to send a GET request to logout the current user
export const logout = (app) => {
  const url = `${API_HOST}/users/logout`;

  axios
    .get(url)
    .then((res) => {
      app.setState({
        email: null,
        name: null,
        message: { type: "", body: "" },
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signup = (credentials, app) => {
  const url = `${API_HOST}/users`;

  axios
    .post(url, credentials)
    .then((res) => {
      if (res.status === 200 && res.data.email !== undefined) {
        app.setState({ email: res.data.email, name: res.data.name });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
