import axios from "axios";

const API_URL = "https://staging.fastor.in:8090/v1/pwa/user/";

class AuthService {
  login(phone, otp, dial_code) {
    return axios
      .post(API_URL + "login", {
        phone,
        otp,
        dial_code
      })
      .then((response) => {
        console.log(response.data.data);
        if (response.data.data.token) {
          console.log(response.data);
          localStorage.setItem("user", JSON.stringify(response.data.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(phone, dial_code) {
    return axios.post(API_URL + "register", {
      phone,
      dial_code
    });
  }
}

export default new AuthService();
