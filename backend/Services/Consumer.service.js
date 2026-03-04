const axios = require("axios");

const url = "https://jsonplaceholder.typicode.com/users";
class eatServices {
  async boomi() {
    const callOut = await axios.get(url);
    return callOut.data;
  }
}

module.exports = new eatServices();
