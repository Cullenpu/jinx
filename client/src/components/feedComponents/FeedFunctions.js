// Functions to help with user actions.
import axios from "axios";
import React from "react";
import { FaAddressBook, FaCalendar, FaGlassCheers, FaHandshake, FaSadCry } from 'react-icons/fa';
// environment configutations
import ENV from "config.js";
import { getColor } from "utils/colors";

const API_HOST = ENV.api_host;

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

export const getColorFromType = (type) => {
  switch (type){
    case 'Wishlist':
      return getColor('primary');
    case 'Applied':
      return '#FFA500';
    case 'Interviewing':
      return getColor('info');
    case 'Offer':
      return getColor('success');
    case 'Rejected':
      return getColor('danger');
    default:
      return getColor('primary');
  }
}

export const getIconFromType = (type) => {
  switch (type){
    case 'Wishlist':
      return <FaHandshake />;
    case 'Applied':
      return <FaAddressBook />;
    case 'Interviewing':
      return <FaCalendar />;
    case 'Offer':
      return <FaGlassCheers />;
    case 'Rejected':
      return <FaSadCry />;
    default:
      return <FaAddressBook />;
  }
}

export const getDescriptionFromType = (type, name, company) => {
  switch (type){
    case 'Wishlist':
      return `${name} just added ${company} to their wishlist.`;
    case 'Applied':
      return `${name} just applied to ${company}.`;
    case 'Interviewing':
      return `${name} just got an interview for ${company}!`;
    case 'Offer':
      return `${name} just got an offer at ${company}!`;
    case 'Rejected':
      return `${name} was just rejected from ${company}.`;
    default:
      return `${name} just updated their status on ${company}`;
  }
}