import axios from "axios";
const baseUrl = 'https://limitless-hamlet-49259.herokuapp.com/api/notes';

export const getAllNotes = () => {
  return axios.get(baseUrl)
    .then(response => {
      const { data } = response;
      return data;
    });
};