import React from 'react';

import { Card, Badge } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

const KnowledgeCard = ({ item }) => {
  const navigate = useNavigate();

  const getCategoryVariant = () => {
    switch (item.category) {
      case 'Crops':
        return 'success';
      case 'Livestock':
        return 'warning';
      case 'Diseases':
        return 'danger';
      default:
        return 'primary';
    }
  };

  const handleClick = () => {
    if (item.category === 'Crops') {
      navigate('/knowledge/crops');
    } else if (item.category === 'Livestock') {
      navigate('/knowledge/livestock');
    } else if (item.category === 'Diseases') {
      navigate('/knowledge/diseases');
    }
  };

  return (
    <Card className="mb-3 shadow-sm" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <Card.Body>
        <Badge bg={getCategoryVariant()} className="mb-2">{item.category}</Badge>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default KnowledgeCard;
