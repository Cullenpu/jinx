// Functions to help with user actions.
import axios from "axios";

// environment configutations
import ENV from "config.js";

const API_HOST = ENV.api_host;
// console.log('Current environment:', ENV.env)

export const getConnections = () => {
  const url = `${API_HOST}/connection`;

  return axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};

export const addConnection = (userID) => {
  const url = `${API_HOST}/connection`;
  const payload = {
    followedId: userID,
  };

  axios
    .post(url, payload)
    .then((res) => {
      return true;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};

// Remove the user from the DB
export const removeConnection = (userID) => {
  const url = `${API_HOST}/connection/${userID}`;

  return axios
    .delete(url)
    .then((res) => {
      if (res.status === 202) {
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
