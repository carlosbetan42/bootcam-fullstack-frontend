import axios from "axios";
const baseUrl = 'http://localhost:3001/api/notes';

export const createNote = (note) => {
  return axios.post(baseUrl, note)
    .then(response => {
      const { data } = response;
      return data;
    });
};