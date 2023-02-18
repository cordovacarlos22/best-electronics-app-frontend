import axios from 'axios';

const API_URL = "http://localhost:3002";

export const getsliderslist = async (id,title,alt,url) => {
  var data = {
    "id": id,
    "title": title,
    "alt": alt,
    "url":url,
  }
  const response = await axios.get(`${API_URL}/slider/sliderslist`,data );
  console.log("api response", response);
  return response;
}
