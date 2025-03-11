import axios from "axios";

const vaApi = axios.create({
  baseURL: "https://api.vam.ac.uk/v2",
});

export const searchCollections = (search_query, pg_number, search_category) => {
  let category = "";
  if (search_category === "all") {
    category = "q";
  } else if (search_category === "title") {
    category = "q_object_title";
  } else if (search_category === "type") {
    category = "q_object_type";
  } else if (search_category === "place") {
    category = "q_place_name";
  } else if (search_category === "material") {
    category = "q_material_technique";
  } else if (search_category === "person") {
    category = "q_actor";
  }

  return vaApi
    .get(
      `/objects/search?${category}=${search_query}&page_size=50&page=${pg_number}`
    )
    .then((data) => {
      console.log(data.request.responseURL);
      return data.data;
    })
    .catch((err) => {
      return err;
    });
};
