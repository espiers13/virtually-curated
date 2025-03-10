import axios from "axios";

const vaApi = axios.create({
  baseURL: "https://api.vam.ac.uk/v2",
});

export const searchCollections = (search_query) => {
  return vaApi
    .get(`/objects/search?q=${search_query}&page_size=100`)
    .then(({ data }) => {
      return data;
    });
};

export const searchCollectionsByPage = (search_query, pg_number) => {
  return vaApi
    .get(`/objects/search?q=${search_query}&page=${pg_number}`)
    .then(({ data }) => {
      console.log(data);
      return data.records;
    });
};
