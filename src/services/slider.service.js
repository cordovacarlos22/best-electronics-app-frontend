import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export const getsliderslist = async () => {
  
  const response = await axios.get(`${API_URL}/slider`);
  console.log("api response", response);
  return response;
}


