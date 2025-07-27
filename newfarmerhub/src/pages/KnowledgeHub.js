import { useState } from 'react';

import { Container, Form, Row, Col } from 'react-bootstrap';

import KnowledgeCard from '../components/KnowledgeCard';

const KnowledgeHub = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  // Mock data
  const knowledgeItems = [
    {
      id: 1,
      title: 'Maize Farming Techniques',
      category: 'Crops',
      description: 'Best practices for high-yield maize farming in East Africa',
      expert: 'Dr. Agricultural Expert',
      date: '2023-05-15'
    },
    {
      id: 2,
      title: 'Dairy Cattle Management',
      category: 'Livestock',
      description: 'Comprehensive guide to modern dairy farming methods',
      expert: 'Livestock Specialist',
      date: '2023-06-20'
    },
    {
      id: 3,
      title: 'Tomato Blight Prevention',
      category: 'Diseases',
      description: 'How to identify and prevent tomato blight in your farm',
      expert: 'Plant Pathologist',
      date: '2023-04-10'
    }
  ];

  const filteredItems = knowledgeItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === '' || item.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container>
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
        {filteredItems.map(item => (
          <Col key={item.id}>
            <KnowledgeCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default KnowledgeHub;