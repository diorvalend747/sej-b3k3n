import axios from "axios";

const config = axios.create({
  baseURL: "https://asia-southeast2-sejutacita-app.cloudfunctions.net",
});

export default config;
