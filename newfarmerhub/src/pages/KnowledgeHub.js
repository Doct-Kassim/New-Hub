import React, { useState } from 'react';

import { Container, Row, Col, Form } from 'react-bootstrap';

import KnowledgeCard from '../components/KnowledgeCard';

const KnowledgeHub = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const knowledgeItems = [
    {
      id: 1,
      title: 'Best Maize Planting Practices',
      category: 'Crops',
      description: 'Learn how to plant maize for better yield.',
      expert: 'Agriculture Expert',
      date: '2023-07-30',
    },
    {
      id: 2,
      title: 'Dairy Cow Management',
      category: 'Livestock',
      description: 'Feeding and care for your dairy cows.',
      expert: 'Livestock Specialist',
      date: '2023-07-29',
    },
    {
      id: 3,
      title: 'Pest Control in Tomatoes',
      category: 'Diseases',
      description: 'How to identify and control tomato pests.',
      expert: 'Plant Pathologist',
      date: '2023-07-28',
    },
  ];

  const filteredItems = knowledgeItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === '' || item.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Knowledge Hub</h2>

      <Row className="mb-4">
        <Col md={8}>
          <Form.Control
            type="text"
            placeholder="Search knowledge base..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col md={4}>
          <Form.Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Crops">Crops</option>
            <option value="Livestock">Livestock</option>
            <option value="Diseases">Diseases</option>
          </Form.Select>
        </Col>
      </Row>

      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <Col key={item.id}>
              <KnowledgeCard item={item} />
            </Col>
          ))
        ) : (
          <p>No knowledge items found matching your criteria.</p>
        )}
      </Row>
    </Container>
  );
};

export default KnowledgeHub;
