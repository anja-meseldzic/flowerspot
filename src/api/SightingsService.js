import axios from "axios";
import BaseApiClass from "./BaseApiClass";

class SightingsService extends BaseApiClass {
  static getAllSightings() {
    return axios.get(
      `https://flowrspot-api.herokuapp.com/api/v1/sightings`,
      this.requestConfig()
    );
  }

  static createSighting(data) {
    return axios.post(
      `https://flowrspot-api.herokuapp.com/api/v1/sightings`,
      data,
      this.requestConfig()
    );
  }

  static getSightingInfo(id) {
    axios.get(
      `https://flowrspot-api.herokuapp.com/api/v1/sightings/${id}`,
      this.requestConfig()
    );
  }

  static deleteSighting(id) {
    axios.delete(
      `https://flowrspot-api.herokuapp.com/api/v1/sightings/${id}`,
      this.requestConfig()
    );
  }

  static updateSighting(id, data) {
    axios.put(
      `https://flowrspot-api.herokuapp.com/api/v1/sightings/${id}`,data,
      this.requestConfig()
    );
  }

  static getLikes(id) {
    axios.get(
      `https://flowrspot-api.herokuapp.com/api/v1/sightings/${id}/likes`,
      this.requestConfig()
    );
  }

  static deleteLike(sightingId) {
    axios.delete(
      `https://flowrspot-api.herokuapp.com/api/v1/sightings/${sightingId}/likes`,
      this.requestConfig()
    );
  }

  static createLike(sightingId) {
    axios.post(
      `https://flowrspot-api.herokuapp.com/api/v1/sightings/${sightingId}/likes`,
      this.requestConfig()
    );
  }

  static getComments(id) {
    axios.get(
      `https://flowrspot-api.herokuapp.com/api/v1/sightings/${id}/comments`,
      this.requestConfig()
    );
  }

  static createComment(id, data) {
    axios.post(
      `https://flowrspot-api.herokuapp.com/api/v1/sightings/${id}/comments`,
      data,
      this.requestConfig()
    );
  }

  static deleteComment(sightingId, commentId) {
    axios.delete(
      `https://flowrspot-api.herokuapp.com/api/v1/sightings/${sightingId}/comments/${commentId}`,
      this.requestConfig()
    );
  }
}

export default SightingsService;
