import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4} sm={12} className="mb-3">
            <h5>Smart School</h5>
            <p>Empowering learning with smart technology and seamless connectivity.</p>
          </Col>
          <Col md={4} sm={6} className="mb-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#features" className="text-light">Features</a></li>
              <li><a href="#about" className="text-light">About</a></li>
              <li><a href="#contact" className="text-light">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} sm={6} className="mb-3">
            <h6>Contact Info</h6>
            <p>Email: info@smartschool.com</p>
            <p>Phone: (555) 123-4567</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <hr className="bg-light" />
            <p>&copy; 2024 Smart School. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;