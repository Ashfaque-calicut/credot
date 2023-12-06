import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAllCartProducts, deleteCartProducts, getCartProducts } from '../Reducer/Reducer';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.viewCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartProducts());
  }, [dispatch]);

  const removeItem = (id) => {
    dispatch(deleteCartProducts(id));
    window.location.reload();

  };

  const removeAllItems = () => {
    dispatch(deleteAllCartProducts());
    window.location.reload();

  };

  return (
    <Container className='mt-4'>
      <Row className='justify-content-center'>
        <Col md={8}>
          <div className='products-container'>
            {cartItems.map((product) => (
              <Card key={product.id} className='mb-3'>
                <Row className='g-0'>
                  <Col md={4}>
                    <Card.Img src={product.image} alt='#' className='img-fluid' />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>{`Price:$ ${product.price}`}</Card.Text>
                      <Card.Text>{`Category: ${product.description}`}</Card.Text>
                      <Button variant='danger' onClick={() => removeItem(product.id)}>
                        Remove
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}
          </div>
          <div className='text-center'>
            <Button variant='danger' onClick={removeAllItems}>
              Remove All
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
