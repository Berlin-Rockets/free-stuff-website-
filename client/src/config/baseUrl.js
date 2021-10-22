const baseURL =
  process.env.REACT_APP_ENV === "development"
    ? "http://localhost:4000"
    : "https://freebay-free-stuff.herokuapp.com";

export default baseURL;
