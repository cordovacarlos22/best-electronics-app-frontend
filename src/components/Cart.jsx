import React, { useState, useEffect, useContext } from 'react'
import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import Paypal from './Paypal';
import { CartContext } from '../context/cartContext'
import { getProductList } from '../services/products.service'
import CartItem from './CartItem'
import CartResume from './CartResume'
import NavBar from './Navbar/NavBar'
import Payment from './Pay/Payment';
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
             
            <table class="table-fixed w-3/4 d-flex">
                <thead className='d-flex'>
                    <tr>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
               <thead className='d-flex'>


               

        
            {
                productList.length && cart && cart.map(item => {
                    var product = findProduct(item.sku)
                    return (
                        <CartItem className="d-flex" key={item.sku} product={product} cartData={item} />
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
            <Payment/>
        </div>

    )
}

export default Cart
