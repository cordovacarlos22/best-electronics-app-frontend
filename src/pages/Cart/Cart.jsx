import React, { useState, useEffect, useContext } from 'react'

const Cart = () => {

       
  return (
    <>
      <h1>Bienvenido al carrito de compra</h1>
      <row>
        <col md={2}></col>
        <col md={4} className="align-self-center mr-3">
          Nombre
        </col>
        <col md={2} className="align-self-center mr-3">
          Precio
        </col>
        <col md={2} className="align-self-center mr-3">
          Cantidad
        </col>
        <col  md={2} className="align-self-center mr-3">
          Subtotal
        </col>
      </row>

      
      <hr />
      
    </>

  )
}

export default Cart
