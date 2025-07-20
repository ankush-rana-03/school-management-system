import React from 'react';
import { Container, Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <div className="bg-light text-dark py-5">
      <Container className="text-center">
        <h1 className="display-4">Welcome to SchoolApp</h1>
        <p className="lead">
          Track student performance, attendance, results, and more in one place!
        </p>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </Container>
    </div>
  );
};

export default HeroSection;