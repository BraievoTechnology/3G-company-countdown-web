// import axios from "axios";
// const api = axios.create({
//   baseURL: "http://localhost:3000/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
// export default api;

/*
import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});
export default api;
*/

import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // for NEXT projects
  headers: {
    "Content-Type": "application/json",
  },
});


export default api;
