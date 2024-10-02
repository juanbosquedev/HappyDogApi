const axios = require("axios");
require("dotenv").config();
const { API_DOG } = process.env;
const { normalize } = require("./normalizeDogData");

const fetchDogsData = async () => {
  const { data } = await axios.get(API_DOG);
  const dogsData = data;
  const normalizedDogsData = dogsData.map((dog, index) =>
    normalize(dog, index)
  );
  return normalizedDogsData;
};

module.exports = { fetchDogsData };
