const getInfo = function (obj) {
    return {
      id: obj.id,
      image:obj.image,
      title: obj.title,
      description: obj.description,
      price: obj.price,
      
    };
  };
  module.exports = { getInfo };