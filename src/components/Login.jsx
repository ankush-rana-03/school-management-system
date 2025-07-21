import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 🆕 Added this
import Lottie from 'lottie-react';
import loginAnimation from '../assets/Login.json';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
      const navigate = useNavigate(); // 🆕 Hook initialization
      const [validated, setValidated] = useState(false);
      const [showPassword, setShowPassword] = useState(false);
      const [formData, setFormData] = useState({ email: '', password: '', role: '' });

      const togglePassword = () => setShowPassword(!showPassword);

      const handleSubmit = (event) => {
            const form = event.currentTarget;
            event.preventDefault();

            if (form.checkValidity() === false) {
                  event.stopPropagation();
            }

            setValidated(true);

            if (form.checkValidity()) {

                  alert(`Login Successful as ${formData.role}`);

                  // ✅ Store data
                  localStorage.setItem('token', 'dummy-token');
                  localStorage.setItem('user', JSON.stringify({ email: formData.email, role: formData.role.toLowerCase() }));
                  // ✅ Role-based navigation       
                  switch (formData.role.toLowerCase()) {
                        
                        case "admin":
                              navigate("/admin");
                              break;
                        case "teacher":
                              navigate("/teacher");
                              break;
                        case "parent":
                              navigate("/parent");
                              break;
                        default:
                              navigate("/");
                  }
            }
      };

      return (
            <Container
                  fluid
                  className="d-flex align-items-center justify-content-center"
                  style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', padding: '2rem' }}
            >
                  <Row className="shadow-lg rounded-4 overflow-hidden bg-white" style={{ width: '90%', maxWidth: '1000px' }}>
                        <Col md={6} className="p-4 d-flex align-items-center justify-content-center bg-light">
                              <Lottie animationData={loginAnimation} style={{ height: '100%', width: '100%' }} />
                        </Col>
                        <Col md={6} className="p-5 d-flex align-items-center justify-content-center">
                              <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ width: '100%' }}>
                                    <h2 className="mb-4 text-center fw-bold text-primary">Login</h2>

                                    <Form.Group controlId="formRole" className="mb-4">
                                          <Form.Label>Select Role</Form.Label>
                                          <Form.Select
                                                required
                                                value={formData.role}
                                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                          >
                                                <option value="">Select the Role...</option>
                                                <option value="Admin">Admin</option>
                                                <option value="Teacher">Teacher</option>
                                                <option value="Parent">Parent</option>
                                          </Form.Select>
                                          <Form.Control.Feedback type="invalid">Please select a role.</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="formEmail" className="mb-3">
                                          <Form.Label>Email address</Form.Label>
                                          <Form.Control
                                                required
                                                type="email"
                                                placeholder="Enter email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                          />
                                          <Form.Control.Feedback type="invalid">Please enter a valid email.</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="formPassword" className="mb-3">
                                          <Form.Label>Password</Form.Label>
                                          <InputGroup>
                                                <Form.Control
                                                      required
                                                      type={showPassword ? 'text' : 'password'}
                                                      placeholder="Enter password"
                                                      value={formData.password}
                                                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                                />
                                                <Button variant="outline-secondary" onClick={togglePassword}>
                                                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                </Button>
                                                <Form.Control.Feedback type="invalid">Please enter your password.</Form.Control.Feedback>
                                          </InputGroup>
                                    </Form.Group>

                                    <div className="d-grid">
                                          <Button variant="primary" type="submit" size="lg" className="rounded-3">
                                                Login
                                          </Button>
                                    </div>
                              </Form>
                        </Col>
                  </Row>
            </Container>
      );
};

export default Login;