import axios from "axios";
const baseUrl = 'https://limitless-hamlet-49259.herokuapp.com/api/notes';

export const create = (note) => {
  // return Promise.reject("Something bad");
  return axios.post(baseUrl, note)
    .then(response => {
      const { data } = response;
      return data;
    });
};

export const getAll = () => {
  return axios.get(baseUrl)
    .then(response => {
      const { data } = response;
      return data;
    });
};