// Functions to help with user actions.
import axios from "axios";

// environment configutations
import ENV from "config.js";

const API_HOST = ENV.api_host;

export const getPostings = () => {
  return axios.get(`${API_HOST}/posting`).then((res) => {
    const postings = res.data;
    return postings;
  });
};

export const getCompanies = () => {
  return axios.get(`${API_HOST}/posting`).then((res) => {
    const seen = [];
    const postings = res.data;
    const uniquePostings = postings.filter((posting) => {
      if (!seen.includes(posting.companyName.toLowerCase())) {
        seen.push(posting.companyName.toLowerCase());
        return posting;
      }
    });
    const companies = uniquePostings.map((posting) => {
      return {
        name: posting.companyName,
        logo: posting.companyLogo,
      };
    });
    return companies;
  });
};

export const addPosting = (posting) => {
    console.log(posting)
  return axios.post(`${API_HOST}/posting`, posting);
};
