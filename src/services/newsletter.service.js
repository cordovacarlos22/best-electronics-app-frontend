import axios from "axios";


const API_URL = process.env.REACT_APP_API_URL

export const susbscribe = async (email) => {

  var userSubs = {

    "email": email,


  }

  const response = await axios.post(`${API_URL}/newsletter`, userSubs);
  console.log("api response", response);
  return response;
}