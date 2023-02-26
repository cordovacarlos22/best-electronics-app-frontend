import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL

export const makeRequest = async (source,amount,currency) => {
  try {

    var body = {
      "source": source,
      "amount": amount,
      "currency": currency
    }
    const response = await axios.post(`${API_URL}/pay`,body);
    console.log("api response", response);
    return response;
  } catch (error) {
    
  }
}