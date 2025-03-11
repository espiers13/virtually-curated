import axios from "axios";

const vaApi = axios.create({
  baseURL: "https://api.vam.ac.uk/v2",
});

export const searchCollections = (search_query, pg_number) => {
  return vaApi
    .get(`/objects/search?q=${search_query}&page_size=50&page=${pg_number}`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};
