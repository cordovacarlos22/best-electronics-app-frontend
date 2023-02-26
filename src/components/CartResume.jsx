import React from 'react'
import { Row, Col } from "react-bootstrap";

const CartResume = ({ resume }) => {

    return (
     <div className='d-flex '>
            <Row className='d-flex flex-row'>
                <Col md={4} className="align-self-center mr-3">
                    items Total
                </Col>
                <Col md={4} className="align-self-center mr-3">
                    $ {resume.amount}
                </Col>
            </Row>
            <Row>
                <Col md={4} className="align-self-center mr-3">
                    Taxes = {process.env.REACT_APP_US_TAXES}%
                </Col>
                <Col md={4} className="align-self-center mr-3">
                    $ {resume.tax}
                </Col>
            </Row>
            <Row>
                <Col md={4} className="align-self-center mr-3">
                    Total a pagar
                </Col>
                <Col md={4} className="align-self-center mr-3">
                    $ {resume.total}
                </Col>
            </Row>
     </div>
        
    )
}

export default CartResume
