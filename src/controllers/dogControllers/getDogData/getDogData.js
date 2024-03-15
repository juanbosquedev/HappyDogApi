
const axios = require("axios");
require("dotenv").config();
const { API_DOG } = process.env;
const {normalize} =require("./normalizeDogData")


const getData = async () => {
  const { data } = await axios.get(API_DOG);
  const dats = data;
  const url = dats.map((el, index)=>normalize(el, index))
  return url;
};



module.exports = {getData};
