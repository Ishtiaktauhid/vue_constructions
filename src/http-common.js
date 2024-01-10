import axios from "axios";

export default axios.create({
  baseURL: "http://localhost/laravel/constructions/api",
  headers: {
    "Content-type": "application/json",
  },
});
