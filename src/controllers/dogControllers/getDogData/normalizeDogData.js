const fs = require("fs");
const jsonData = fs.readFileSync("dog.json", "utf8");//json:dogs more information

const parsingDogs = JSON.parse(jsonData);


const normalize = function (obj, index) {
  let lifespan = obj.breeds[0]?.life_span?.replace("years", "años") || "10 años";
 
  //data in Spanish
  let name =parsingDogs[index]?.name;
  let city = parsingDogs[index]?.city;
  let temperament =parsingDogs[index]?.temperament;
  return {
    hostage_id: 1,
    name: name,
    city:city,
    height: obj.height + " centímetros",
    weight:
      obj.breeds[0]?.weight.imperial !== undefined
        ? obj.breeds[0]?.weight.imperial + " kilos"
        : 40 + " kilos",
    image:obj.url || "https://images.unsplash.com/photo-1608096299210-db7e38487075?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    personality: temperament,
    life_span: lifespan,
  };
};

module.exports = { normalize };
