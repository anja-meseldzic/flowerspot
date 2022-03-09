import axios from "axios";

class FlowerService {
  static getAllFlowers() {
    return axios.get(`https://flowrspot-api.herokuapp.com/api/v1/flowers`);
  }

  static getFlowerDetails(id) {
    return axios.get(
    `https://flowrspot-api.herokuapp.com/api/v1/flowers/${id}` 
    );
  }

  static getSightingsForFlower(id) {
    return axios.get(
      `https://flowrspot-api.herokuapp.com/api/v1/flowers/${id}/sightings`
    );
  }
}

export default FlowerService;
