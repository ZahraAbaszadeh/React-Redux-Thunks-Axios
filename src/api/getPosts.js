import axios from "axios";

const getPosts = () => {
  const { REACT_APP_API_URL } = process.env;

  const instance = axios.create({
    baseURL: REACT_APP_API_URL,
    responseType: "json",
  });

  return instance;
};

export default getPosts;
