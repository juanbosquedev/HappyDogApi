const fs = require("fs");
const jsonData = fs.readFileSync("dog.json", "utf8");

const parsingDogs = JSON.parse(jsonData);


const normalize = function (obj, index) {
  let lifespan = obj.breeds[0]?.life_span.replace("years", "años");
  //data in Spanish
  let name =parsingDogs[index]?.name;
  let temperament =parsingDogs[index]?.temperament;
  return {
    hostage_id: 1,
    name: name,
    height: obj.height + " centímetros",
    weight:
      obj.breeds[0]?.weight.imperial !== undefined
        ? obj.breeds[0]?.weight.imperial + " kilos"
        : 40 + " kilos",
    image: obj.url,
    personality: temperament,
    life_span: lifespan,
  };
};

module.exports = { normalize };
