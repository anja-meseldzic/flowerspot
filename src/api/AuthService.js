import axios from "axios";
import BaseApiClass from "./BaseApiClass";

class AuthService extends BaseApiClass {

  static login(data) {
    return axios.post(`https://flowrspot-api.herokuapp.com/api/v1/users/login`,data);
  }

  static register(data) {
    return axios.post(`https://flowrspot-api.herokuapp.com/api/v1/users/register`,data);
  }

  static getUserInfo() {
    return axios.get(
      `https://flowrspot-api.herokuapp.com/api/v1/users/me`,
      this.requestConfig()
    );
  }
}

export default AuthService;
