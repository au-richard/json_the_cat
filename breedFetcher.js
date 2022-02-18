const request = require("request");

const breedType = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedType}`;

request(url, (error, response, body) => {
  // console.log(typeof body);

  // console.log('error:', error);
  // console.log('statusCode:', response && response.statusCode);
  // console.log('body:', body);


  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Breed Not Found");
  }

  if (!response.ok) {
    console.log("Error 404: URL Not Found");
  }

  if (data.length >= 1) {
    // console.log(data);
    // console.log(typeof data);
    console.log(data[0].description);
  }
});