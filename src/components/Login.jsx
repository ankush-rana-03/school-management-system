import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import Lottie from 'lottie-react';
import loginAnimation from '../assets/Login.json'; // apne lottie path ke hisab se set karo
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert('Login successful!');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Container fluid className="vh-100 d-flex justify-content-center align-items-center bg-light">
      <Row className="w-100 shadow-lg bg-white rounded p-4" style={{ maxWidth: '900px' }}>
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <Lottie animationData={loginAnimation} loop style={{ height: '100%', maxHeight: '400px' }} />
        </Col>
        <Col md={6}>
          <h3 className="text-center mb-4">Login</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                <InputGroup.Text onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </InputGroup.Text>
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <div className="d-grid gap-2 mt-4">
              <Button variant="primary" type="submit" className="rounded-pill">
                Login
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;