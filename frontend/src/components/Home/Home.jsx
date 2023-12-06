import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';


import image from "../../Assets/Images/game.png";
import Watch from "../../Assets/Images/Watch1.png";
import Bag from "../../Assets/Images/Bag.png";
import Shoe from "../../Assets/Images/shoe9.png";
import Shoe1 from '../../Assets/Images/Shoes.webp';
import Shoe2 from '../../Assets/Images/Shoe7.jpg';
import Shoe3 from '../../Assets/Images/Shoe4.webp';
import bag1 from '../../Assets/Images/bag1.jpg';
import bag2 from '../../Assets/Images/bag2.jpg';
import bag3 from '../../Assets/Images/bag3.avif';
import Contact from "../Contact/Contact";
const ProductCard = ({ title, image, description, price }) => (
<Col lg={4} md={6} sm={12} style={{ marginBottom: '20px', paddingLeft: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Card style={{ width: '100%', height: '100%', boxShadow: '1px 1px 4px black' }}>
    <Card.Img variant="top" src={image} alt="Card image cap" />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
      <h3 className="text-center">{price}</h3>
      <div className="text-center">
        <Button variant="dark">Buy Now</Button>
      </div>
    </Card.Body>
  </Card>
</Col>

);
const Home = () => {
  return (
    <div style={{ marginTop: "20px", marginLeft: "0px" }}>
      <Container>
      <Row >
          <Col
            lg={6}
            style={{
              backgroundColor: "rgba(254,234,235,255)",
            }}
          >
            <h1 style={{ marginTop: "130px" }}>X-Bow For Your Living Room</h1>
            <p>
              Contrary to popular belief. Lorem ipsum is not simply random text.
              It has roots in a piece of Classical Latin Literature.
            </p>
            <h2 style={{ color: "rgba(246,84,146,255)" }}>$600</h2>
            <Button
              variant="light"
              className="text-white "

              style={{ backgroundColor: "rgba(246,84,146,255)" }}
            >
              Buy Now
            </Button>
          </Col>

          <Col
            lg={6}
            style={{
              backgroundColor: "rgba(254,234,235,255)",
              padding: "20px",
            }}
          >
            <img
              src={image}
              alt="Product"
              style={{ width: "100%", height: "auto", marginTop: "100px" }}
            />
          </Col>
        </Row>

        <Row style={{ marginTop: "10px" }}>
          <Col lg={4} md={4} sm={12}>
            <Button
              variant="light"
              style={{
                color: "white",
                background:
                  "linear-gradient(45deg, rgba(255,186,38,255), rgba(255,203,28,255))",
                border: "none",
                width: "100%",
                height: "100px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              

              <span style={{ flex: "1" }}>Watch</span>
              <img
                src={Watch}
                alt="Watch"
                style={{ width: "80px", height: "60px", marginLeft: "10px" }}
              />
            </Button>
          </Col>

          <Col lg={4} md={4} sm={12}>
          <Link to='/back' style={{textDecoration:'none'}}>
            <Button
              variant="light"
              style={{
                color: "white",
                background:
                  "linear-gradient(45deg, rgba(255,60,138,255),rgba(254,66,142,255))",
                border: "none",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
             
              <span style={{ flex: "1" }}>Bag</span>
              <img
                src={Bag}
                alt="Bag"
                style={{ width: "80px", height: "60px", marginLeft: "10px" }}
              />
             
            </Button>
            </Link>
          </Col>

          <Col lg={4} md={4} sm={12}>
          <Link to='/shoe' style={{textDecoration:"none"}}>
            <Button
              variant="light"
              style={{
                color: "white",
                background:
                  "linear-gradient(45deg, rgba(69,143,251,255), rgba(15,206,187,255))",
                border: "none",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
             
              <span style={{ flex: "1" }}>Shoes</span>
              <img
                src={Shoe}
                alt="Shoes"
                style={{ width: "80px", height: "60px", marginLeft: "10px" }}
              />
            
            </Button>
            </Link>
          </Col>
        </Row>
        <div className="shoes-container" style={{ marginTop: "10px" }}>
          <div className="row">
            <h1>Shoes</h1>
            <ProductCard
              title="Nike White"
              image={Shoe1}
              description="Some quick example text to build on the card title and make up the bulk of the card's content."
              price="$999"
            />
            <ProductCard
              title="Adidas Rainbow"
              image={Shoe2}
              description="Some quick example text to build on the card title and make up the bulk of the card's content."
              price="$799"
            />
            <ProductCard
              title="Nike Border"
              image={Shoe3}
              description="Some quick example text to build on the card title and make up the bulk of the card's content."
              price="$699"
            />
          </div>
        </div>

        <div className="shoes-container" style={{ marginTop: "10px" }}>
          <div className="row">
            <h1>Backpack</h1>
            <ProductCard
              title="Nike back"
              image={bag1}
              description="Some quick example text to build on the card title and make up the bulk of the card's content."
              price="$399"
            />
            <ProductCard
              title="Dell school bag"
              image={bag2}
              description="Some quick example text to build on the card title and make up the bulk of the card's content."
              price="$99"
            />
            <ProductCard
              title="HP Sky blue bag"
              image={bag3}
              description="Some quick example text to build on the card title and make up the bulk of the card's content."
              price="$199"
            />
          </div>
        </div>
      
      </Container>
      <Contact/>
    </div>
  );
};

export default Home;
