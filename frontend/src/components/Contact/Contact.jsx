import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className='contact' style={{ backgroundColor: 'rgba(254, 234, 235, 255)', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '100px', marginRight: '100px' }}>
      <Container>
        <Row>
          <Col xs={12} className="text-center">
            <h1>LET'S STAY IN TOUCH</h1>
            <p>Get updates on sales specials and more.</p>
            <Form>
              <Form.Group controlId="formEmail">
                <Form.Control
                  style={{ width: '100%', maxWidth: '300px', margin: '0 auto' }}
                  type="email"
                  placeholder="Enter your email"
                />
              </Form.Group>
              <Button className='text-white' variant="light" style={{ backgroundColor: 'rgba(246, 84, 146, 255)' }} type="submit">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
