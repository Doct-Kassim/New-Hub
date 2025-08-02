import React, { useState, useEffect } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';

const AddTrainingTutorials = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [trainings, setTrainings] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('trainingTutorials')) || [];
    setTrainings(stored);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTraining = { title, image, description };

    const updated = editIndex !== null
      ? trainings.map((item, i) => (i === editIndex ? newTraining : item))
      : [...trainings, newTraining];

    localStorage.setItem('trainingTutorials', JSON.stringify(updated));
    setTrainings(updated);
    setTitle('');
    setImage('');
    setDescription('');
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    const item = trainings[index];
    setTitle(item.title);
    setImage(item.image);
    setDescription(item.description);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = trainings.filter((_, i) => i !== index);
    localStorage.setItem('trainingTutorials', JSON.stringify(filtered));
    setTrainings(filtered);
    setTitle('');
    setImage('');
    setDescription('');
    setEditIndex(null);
  };

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image', 'video'],
      ['clean']
    ],
  };

  const formats = [
    'header', 'font', 'bold', 'italic', 'underline',
    'list', 'bullet', 'link', 'image', 'video'
  ];

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <h3>{editIndex !== null ? 'Edit Training/Tutorial' : 'Add Training/Tutorial'}</h3>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                required={editIndex === null}
              />
              {image && (
                <div className="mt-2">
                  <img src={image} alt="preview" style={{ width: '90px', borderRadius: '6px' }} />
                </div>
              )}
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Description</Form.Label>
              <ReactQuill
                theme="snow"
                value={description}
                onChange={setDescription}
                modules={modules}
                formats={formats}
                placeholder="Write training/tutorial details..."
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant={editIndex !== null ? 'primary' : 'success'} type="submit">
                {editIndex !== null ? 'Update Training' : 'Save Training'}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      <h4 className="mt-5">Saved Trainings/Tutorials</h4>
      <Row>
        {trainings.map((item, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={item.image}
                style={{
                  height: '160px',
                  width: '100%',
                  objectFit: 'cover',
                  borderTopLeftRadius: '6px',
                  borderTopRightRadius: '6px',
                }}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <div
                  className="mb-2"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                  style={{ maxHeight: '120px', overflowY: 'auto' }}
                />
                <Button size="sm" variant="outline-primary" className="me-2" onClick={() => handleEdit(index)}>
                  Edit
                </Button>
                <Button size="sm" variant="outline-danger" onClick={() => handleDelete(index)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AddTrainingTutorials;
