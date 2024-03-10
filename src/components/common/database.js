import axios from "axios";

class Database {
  constructor() {
    this.db = process.env.REACT_APP_BASE_URL;
    //console.log("db:", this.db);
  }

  //createAccount
  async createAccount(email, password, name) {
    try {
      const response = await axios.post(`${this.db}/user/register`, {
        email,
        password,
        name,
      });
      return response.data;
    } catch (error) {
      console.log("error in create account : ", error.message);
    }
  }

  //login that verifies the user
  async login(email, password) {
    try {
      const response = await axios.post(`${this.db}/user/login`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.log("error in login : ", error.message);
      throw error;
    }
  }
}

const database = new Database();
export default database;
