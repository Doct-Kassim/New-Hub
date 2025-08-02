import React, { useEffect, useState } from 'react';

import { Container, Card, Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const CropKnowledge = () => {
  const [techniques, setTechniques] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cropTechniques')) || [];
    setTechniques(stored);
  }, []);

  return (
    <Container className="mt-4">
      <h3 className="mb-4">Crop Knowledge</h3>
      <Row>
        {techniques.map((tech, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Link to={`/crop/${index}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={tech.image}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{tech.title}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CropKnowledge;
