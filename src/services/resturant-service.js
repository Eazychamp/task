import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://staging.fastor.in:8090/v1/m/restaurant?city_id=118&=&=";

class ResturantService {
  getSerives() {
    return axios.get(API_URL, { headers: authHeader() });
  }

}

export default new ResturantService();