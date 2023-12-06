import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { postCartProducts } from '../Reducer/Reducer';
import { useNavigate } from 'react-router-dom';
import Shoe from '../../Assets/Images/Shoe3.jpeg';
import Shoe7 from '../../Assets/Images/Shoe7.jpg';
import Shoe1 from '../../Assets/Images/Shoe1.avif';

const Shoes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const shoesData = [
    {
      id: 1,
      title: 'Nike White',
      image: Shoe,
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      price: 999,
    },
    {
      id: 2,
      title: 'Adidas Rainbow',
      image: Shoe7,
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      price: 799,
    },
    {
      id: 3,
      title: 'Nike Border',
      image: Shoe1,
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      price: 699,
    },
  ];

  const addToCart = (product) => {
    dispatch(postCartProducts(product));
    navigate('/cart');
    window.location.reload();
  };

  return (
    <div className="shoes-container" style={{ paddingLeft: '100px', marginTop: '10px' }}>
      <div className="row">
        <h1>Shoes</h1>
        {shoesData.map((shoe) => (
          <Col key={shoe.id} lg={4} style={{ marginBottom: '20px'}}>
            <Card style={{ width: '18rem', height: '500px', boxShadow: '1px 1px 4px black' }}>
              <Card.Img variant="top" src={shoe.image} alt={shoe.name} style={{height:"250px"}} />
              <Card.Body>
                <Card.Title>{shoe.title}</Card.Title>
                <Card.Text>{shoe.description}</Card.Text>
                <h3>{`$${shoe.price}`}</h3>
                <Button variant="primary"  onClick={() => addToCart(shoe)}>Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </div>
    </div>
  );
};

export default Shoes;
