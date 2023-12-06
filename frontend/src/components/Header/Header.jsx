import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from 'react-icons/fa'; 
import { useDispatch, useSelector } from 'react-redux';

import { getCartProducts } from '../Reducer/Reducer';

const Header = () => {
  const data=useSelector((state)=>state.cart.viewCart);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getCartProducts())
  }, [dispatch]);
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" expand="md">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/shoe">Shoes</Nav.Link>
              <Nav.Link href="/back">Backpack</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/cart">
                <FaShoppingCart
                  style={{
                    color: 'white',
                    background: 'blue',
                    borderRadius: '50%',
                    padding: '10px', 
                  }}
                  size={40} 
                  
                />
               <span style={{color:"blue"}}> {data.length}</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
