import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const AboutUs = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src="https://img.freepik.com/free-vector/school-students-learning-technology_1308-105305.jpg"
              alt="About Smart School"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h2 className="mb-4">About Smart School</h2>
            <p>
              Smart School is a modern solution designed to revolutionize school management.
              We bring advanced features such as real-time attendance tracking, instant parent-teacher communication,
              result sharing on WhatsApp, and face recognition-based monitoring—all packed in a simple, beautiful, and
              mobile-friendly interface.
            </p>
            <p>
              Whether you're a principal, teacher, or parent, Smart School keeps you connected and in control.
              It's not just software—it's your school's smart partner.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;