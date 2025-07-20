import React from "react";
import Lottie from "lottie-react";
import loginAnimation from "../assets/login.json";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../styles/Login.css"; // we'll create this next

const Login = () => {
  return (
    <div className="login-page">
      <Container fluid className="login-container">
        <Row className="align-items-center min-vh-100">
          <Col md={6} className="d-flex justify-content-center">
            <Lottie animationData={loginAnimation} loop={true} className="login-lottie" />
          </Col>

          <Col md={6} className="d-flex justify-content-center">
            <Card className="login-card p-4 shadow-lg">
              <h2 className="text-center mb-4">Welcome Back</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit" className="login-btn w-100">
                  Login
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;