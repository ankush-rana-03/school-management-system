import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUserCheck, FaBookOpen, FaChartBar, FaBell } from 'react-icons/fa';

const features = [
  {
    icon: <FaUserCheck size={40} />,
    title: 'Attendance Tracking',
    desc: 'Mark daily attendance with face recognition & GPS.',
  },
  {
    icon: <FaBookOpen size={40} />,
    title: 'Homework Upload',
    desc: 'Teachers upload & students submit homework easily.',
  },
  {
    icon: <FaChartBar size={40} />,
    title: 'Exam Results',
    desc: 'Auto-generate PDF report cards with marks & grades.',
  },
  {
    icon: <FaBell size={40} />,
    title: 'Notifications',
    desc: 'Send instant alerts to parents via WhatsApp/SMS.',
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-white py-5">
      <Container>
        <h2 className="text-center mb-4">Key Features</h2>
        <Row>
          {features.map((feature, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <Card className="h-100 text-center shadow-sm">
                <Card.Body>
                  <div className="text-primary mb-3">{feature.icon}</div>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FeaturesSection;