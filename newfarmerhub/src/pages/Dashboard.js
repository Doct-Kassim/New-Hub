import React from 'react';

import { Container, Row, Col, Carousel } from 'react-bootstrap';

import WeatherWidget from '../components/WeatherWidget';

const Dashboard = () => {
  const imageList = [
    '/images/farming1.jpeg',
    '/images/farming2.jpeg',
    '/images/livestock1.jpeg',
    '/images/livestock2.jpeg',
    '/images/images.jpeg',
    '/images/images (1).jpeg',
    '/images/images (2).jpeg',
    '/images/images (3).jpeg',
    '/images/images (5).jpeg',
    '/images/images (6).jpeg'
  ];

  return (
    <Container fluid className="px-4 py-4">
      <h2 className="mb-4">Farmer Dashboard</h2>
      <Row>
        {/* Weather on the left */}
        <Col md={4}>
          <WeatherWidget />
        </Col>

        {/* Image Carousel on the right */}
        <Col md={8}>
          <Carousel controls={true} indicators={false} fade interval={3000}>
            {imageList.map((src, index) => (
              <Carousel.Item key={index}>
                <img
                  src={src}
                  alt={`slide-${index}`}
                  className="d-block w-100"
                  style={{ maxHeight: '500px', objectFit: 'cover', borderRadius: '10px' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
