import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { postCartProducts } from '../Reducer/Reducer';
import { useNavigate } from 'react-router-dom';

import bag1 from '../../Assets/Images/bag1.jpg';
import bag2 from '../../Assets/Images/bag2.jpg';
import bag3 from '../../Assets/Images/bag3.avif';
import bag4 from '../../Assets/Images/bag4.avif';
import bag5 from '../../Assets/Images/bag5.jpg';
import bag6 from '../../Assets/Images/bag6.jpg';

const Backpack = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const backpackData = [
    {
      id: 1,
      title: 'Nike back',
      image: bag1,
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      price: 399,
    },
    {
      id: 2,
      title: 'Adidas Rainbow',
      image: bag2,
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      price: 799,

    },
    {
      id: 3,
      title: 'Dell school bag',
      image: bag3,
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      price: 99,

    },
    {
      id: 4,
      title: 'Dell school bag',
      image: bag4,
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      price: 99,

    },
    {
      id: 5,
      title: 'Dell school bag',
      image: bag5,
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      price: 99,

    },
    {
      id: 6,
      title: 'Dell school bag',
      image: bag6,
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      price: 99,

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
        <h1>Backpack</h1>
        {backpackData.map((backpack) => (
          <Col key={backpack.id} lg={4} style={{ marginBottom: '20px' }}>
            <Card style={{ width: '18rem', height: '450px', boxShadow: '1px 1px 4px black' }}>
              <Card.Img variant="top" src={backpack.image} alt={backpack.name} style={{height:"200px"}} />
              <Card.Body>
                <Card.Title>{backpack.title}</Card.Title>
                <Card.Text>{backpack.description}</Card.Text>
                <h3>{`$${backpack.price}`}</h3>
                <Button variant="primary" onClick={() => addToCart(backpack)}>Add To cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </div>
    </div>
  );
};

export default Backpack;
