import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL


export const login = async (username, password) => {
  var data = {
    "username": username,
    "password": password
  }
  const response = await axios.post(`${API_URL}/auth/login`, data);
  console.log("api response", response);
  return response;
}

export const signup = async (firstName, lastName, username, email, password) => {

  var userData = {
    "firstName": firstName,
    "lastName": lastName,
    "username": username,
    "email": email,
    "password": password,

  }

  const response = await axios.post(`${API_URL}/auth/register`, userData);
  console.log("api response", response);
  return response;
}