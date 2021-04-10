// Functions to help with user actions.
import axios from "axios";

// environment configutations
import ENV from "config.js";

const API_HOST = ENV.api_host;

export const getApplications = () => {
  const url = `${API_HOST}/applications`;

  return axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return [];
    });
};

export const addApplication = (application) => {
  const url = `${API_HOST}/applications`;
  const payload = application;
  return axios
    .post(url, payload)
    .then((res) => {
      return true;
    })
    .catch((error) => {
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

export const getApplication = (id) => {
  const url = `${API_HOST}/applications/single/${id}`;

  return axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return [];
    });
};

export const editApplication = (id, payload) => {
  const url = `${API_HOST}/applications/${id}`;

  axios
    .patch(url, payload)
    .then((res) => {
      return true;
    })
    .catch((error) => {
      return false;
    });
};
