import React, { useState, useEffect, useContext } from 'react'
import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import Paypal from './Paypal';
import { CartContext } from '../context/cartContext'
import { getProductList } from '../services/products.service'
import CartItem from './CartItem'
import CartResume from './CartResume'
import NavBar from './Navbar/NavBar'
const Cart = () => {
    const { cart, cartResume } = useContext(CartContext)
    const [productList, setProductList] = useState([])

    const loadProducts = async () => {
        const response = await getProductList();
        if (response.status === 200) {
            setProductList(response.data);
        }

    };

    const findProduct = (sku) => {
        return productList.find(prod => prod.sku === sku)
    }

    useEffect(() => {
        loadProducts();
    }, []);

    const handleOnPaid = (response) => {
        console.log("PAYPAL RESPONSE", response)
    }

    return (
        <div className='w-screen h-screen d-flex  justify-center'>
            <NavBar/>
            <h1 className='d-flex  justify-center'>Shopping Cart</h1>
             
            <table class="table-auto w-3/4">
                <thead>
                    <tr>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
               <thead>


               

        
            {
                productList.length && cart && cart.map(item => {
                    var product = findProduct(item.sku)
                    return (
                        <CartItem key={item.sku} product={product} cartData={item} />
                        )
                    })
                }
            <hr />
            {
                cartResume && (
                    <CartResume resume={cartResume} />
                    )
                }
            <hr />

             </thead>
            </table>
            <h1>Pay</h1>
            <div style={{ maxWidth: "240px", minHeight: "200px" }}>
                <PayPalScriptProvider
                    options={{
                        "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
                        components: "buttons",
                        currency: "US"
                    }}
                >
                    <Paypal
                        currency={"US"}
                        amount={10}
                        onPaid={handleOnPaid}
                        showSpinner={true}
                    />
                </PayPalScriptProvider>
            </div>
        </div>

    )
}

export default Cart
