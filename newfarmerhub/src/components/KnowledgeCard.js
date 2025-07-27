import { Card, Badge } from 'react-bootstrap';

const KnowledgeCard = ({ item }) => {
  const getCategoryVariant = () => {
    switch(item.category) {
      case 'Crops': return 'success';
      case 'Livestock': return 'warning';
      case 'Diseases': return 'danger';
      default: return 'primary';
    }
  };

  return (
    <Card className="h-100">
      <Card.Body>
        <Badge bg={getCategoryVariant()} className="mb-2">
          {item.category}
        </Badge>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between">
        <small>By {item.expert}</small>
        <small>{item.date}</small>
      </Card.Footer>
    </Card>
  );
};

export default KnowledgeCard;