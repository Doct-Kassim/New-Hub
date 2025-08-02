// src/pages/LivestockDetail.js
import React, { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import { Container, Card, Button } from 'react-bootstrap';

const LivestockDetail = () => {
  const { id } = useParams();
  const [info, setInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('livestockInfo')) || [];
    const selected = data[id];
    if (selected) {
      setInfo(selected);
    } else {
      navigate('/livestock'); // fallback
    }
  }, [id, navigate]);

  if (!info) return null;

  return (
    <Container className="mt-4">
      <Card>
        <Card.Img
          variant="top"
          src={info.image}
          style={{ maxHeight: '350px', objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title>{info.title}</Card.Title>
          <div dangerouslySetInnerHTML={{ __html: info.description }} />
        </Card.Body>
      </Card>

      <div className="mt-3">
        <Button onClick={() => navigate(-1)} variant="secondary">
          Back
        </Button>
      </div>
    </Container>
  );
};

export default LivestockDetail;
