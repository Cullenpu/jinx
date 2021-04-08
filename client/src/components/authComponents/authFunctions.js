// Functions to help with user actions.
import axios from "axios";

// environment configutations
import ENV from "config.js";

const API_HOST = ENV.api_host;
// console.log('Current environment:', ENV.env)

// Send a request to check if a user is logged in through the session cookie
export const checkSession = (app) => {
  const url = `${API_HOST}/users/check-session`;

  if (ENV.use_frontend_test_user) console.log("Using test user!");
  axios
    .get(url)
    .then((res) => {
      if (res.status === 200 && res.data.id) {
        app.setState({
          id: res.data.id,
          email: res.data.email,
          name: res.data.name,
          role: res.data.role,
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// A function to send a POST request with the user to be logged in
export const login = (credentials, app) => {
  const url = `${API_HOST}/users/login`;

  return axios
    .post(url, credentials)
    .then((res) => {
      if (res.status === 200 && res.data.email !== undefined) {
        app.setState({
          id: res.data.id,
          email: res.data.email,
          name: res.data.name,
          role: res.data.role,
        });
        return true;
      } else {
        return false;
      }
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};

// A function to send a GET request to logout the current user
export const logout = (app) => {
  const url = `${API_HOST}/users/logout`;

  axios
    .get(url)
    .then((res) => {
      app.setState({
        id: null,
        email: null,
        name: null,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

// Returns 0 on successful database addition, -1 otherwise
export const signup = (credentials) => {
  const url = `${API_HOST}/users`;

  return axios
    .post(url, credentials)
    .then((res) => {
      if (res.status === 200 && res.data.email !== undefined) {
        // app.setState({ email: res.data.email, name: res.data.name });
        return true;
      }
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};

export const getUsers = () => {
  const url = `${API_HOST}/users/all`;

  return axios
    .get(url)
    .then((res) => {
      return res.data.user;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};

// Returns 0 on successful database addition, -1 otherwise
export const edit = (userID, op, path, value) => {
  const url = `${API_HOST}/users/edit/${userID}`;

  const body = [{ op: op, path: path, value: value }];
  return axios
    .patch(url, body)
    .then((res) => {
      if (res.status === 200) {
        console.log(res);
        return true;
      }
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};

// Remove the user from the DB
export const removeUser = (userID) => {
  const url = `${API_HOST}/users/remove/${userID}`;

  return axios
    .delete(url)
    .then((res) => {
      if (res.status === 200) {
        console.log(res);
        return true;
      }
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};
