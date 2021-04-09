// Functions to help with user actions.
import axios from "axios";

// environment configutations
import ENV from "config.js";

const API_HOST = ENV.api_host;
// console.log('Current environment:', ENV.env)

export const getFeedItems = () => {
  const url = `${API_HOST}/feed`;

  return axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return [];
    });
};

export const sortFeedItems = (feedItems) => {
  const output = [];
  console.log(feedItems);
  feedItems.forEach((connection) => {
    const followedUser = connection.followedId;
    const notificationsForUser = followedUser.feed; // [] or [{description: '...'}, ...]
    console.log(notificationsForUser);
    output.concat(notificationsForUser);
  })
  return output;
};