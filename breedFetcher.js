const request = require("request");


const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    //If Breed is Not Found
    if (data.length === 0) {
      callback(null, "Breed Not Found");
    }
    //If URL is not correct

    //If Breed Exists
    if (data.length >= 1) {
      // console.log(data);
      // console.log(typeof data);
      callback(null, data[0].description);
    }
  });
};



module.exports = { fetchBreedDescription };