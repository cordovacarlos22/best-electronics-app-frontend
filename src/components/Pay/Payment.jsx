import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
const Payment = () => {
  const Key = "pk_test_51MaS18ByCii4JTZInmQ2kV5aJkNngTc1ik1BhkX7bSmdStxbUeGASUZ8ylRQRlDvY08RBLRH32R3wFfVutxbWPHw00BtItHGdB"

  const onToken = (token) => {
    setStripeToken(token)
  }

  const [stripeToken, setStripeToken] = useState(null);
  const history = useNavigate();


  useEffect(() => {
    const makeRequest = async () => {
      try {
        const API_URL = "http://localhost:3002"
        const res = await axios.post(`${API_URL}/pay`, {
          tokenId: stripeToken.id,
          amount: 2000
        });
        console.log(res.data)
        history("/sucesspayment")
      } catch (error) {

      }
    };
    stripeToken && makeRequest()
  }, [stripeToken,history])
  return (
    <div className="d-flex text-center align-center  align-center rounded-md justify-center">
      <div role="group" className="Auth-form-container d-flex justify-center bg-black  text-white align-center cursor-pointer w-[8%] m-4 border-red-100 rounded-lx text-center rounded-xl ">
        {stripeToken ? (<span>Processing Order. please wait</span>) : (
          <StripeCheckout
            name="Best Deals Electronics"
            image="https://i.postimg.cc/NMcVY8nR/Screenshot-2023-02-20-at-5-28-54-PM.png"
            billingAddress
            shippingAddress
            description='Your total is $20'
            amount={2000}
            token={onToken}
            stripeKey={Key}
            
          >
            <button group className=" d-flex justify-center align-center h-28  rounded-md" ><h1 className='d-flex align-center'>Pay Now</h1></button>
          </StripeCheckout>
        )}
      </div>

    </div>
  )
}


export default Payment

