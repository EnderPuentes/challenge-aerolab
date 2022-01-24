require("dotenv").config();
import $axios from "axios";

export default async function (req, res, next) {
  const axios = $axios.create({
    baseURL: process.env.API_URL,
  });

  const response = await axios.get(req.url);
  res.end(JSON.stringify(response.data));
  next();
}
