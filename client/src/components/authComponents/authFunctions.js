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
        if (res.status === 200 && res.data.currentUser) {
          app.setState({ currentUser: res.data.currentUser });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    app.setState({ currentUser: ENV.user });
  }
};

// A function to send a POST request with the user to be logged in
export const login = (credentials, app) => {
  // Create our request constructor with all the parameters we need
  const request = new Request(`${API_HOST}/users/login`, {
    method: "post",
    body: JSON.stringify(credentials),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });

  const url = `${API_HOST}/users/login`;

  axios
    .post(url, credentials)
    .then((res) => {
      if (res.status === 200 && res.data.currentUser !== undefined) {
        app.setState({ currentUser: res.data.currentUser });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// A function to send a GET request to logout the current user
export const logout = (app) => {
  const url = `${API_HOST}/users/logout`;

  fetch(url)
    .then((res) => {
      app.setState({
        currentUser: null,
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
      if (res.status === 200 && res.data.currentUser !== undefined) {
        app.setState({ currentUser: res.data.currentUser });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
