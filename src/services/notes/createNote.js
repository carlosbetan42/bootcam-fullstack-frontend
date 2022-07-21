import axios from "axios";
const baseUrl = 'https://limitless-hamlet-49259.herokuapp.com/api/notes';

export const createNote = (note) => {
  return axios.post(baseUrl, note)
    .then(response => {
      const { data } = response;
      return data;
    });
};