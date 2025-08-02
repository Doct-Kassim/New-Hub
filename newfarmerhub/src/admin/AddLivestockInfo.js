// src/pages/AddLivestockInfo.js
import React, { useState, useEffect } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';

const AddLivestockInfo = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [livestockList, setLivestockList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('livestockData')) || [];
    setLivestockList(stored);
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
    const newItem = { title, image, description };

    let updatedList = [];
    if (editIndex !== null) {
      updatedList = livestockList.map((item, index) =>
        index === editIndex ? newItem : item
      );
    } else {
      updatedList = [...livestockList, newItem];
    }

    localStorage.setItem('livestockData', JSON.stringify(updatedList));
    setLivestockList(updatedList);
    setTitle('');
    setImage('');
    setDescription('');
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    const item = livestockList[index];
    setTitle(item.title);
    setImage(item.image);
    setDescription(item.description);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = livestockList.filter((_, i) => i !== index);
    localStorage.setItem('livestockData', JSON.stringify(filtered));
    setLivestockList(filtered);
    if (editIndex === index) {
      setTitle('');
      setImage('');
      setDescription('');
      setEditIndex(null);
    }
  };

  const modules = {
    toolbar: [
      [{ font: ['arial', 'times-new-roman', 'calibri', 'georgia'] }],
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  };

  const formats = [
    'header', 'font', 'bold', 'italic', 'underline', 'strike',
    'list', 'bullet', 'link', 'image', 'video'
  ];

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <h3 className="mb-4">
            {editIndex !== null ? 'Edit Livestock Info' : 'Add Livestock Info'}
          </h3>

          <Form onSubmit={handleSubmit}>
            {/* Title */}
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter livestock title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>

            {/* Image */}
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
                  <img
                    src={image}
                    alt="Preview"
                    style={{ width: '90px', height: 'auto', borderRadius: '6px' }}
                  />
                </div>
              )}
            </Form.Group>

            {/* Description */}
            <Form.Group className="mb-4">
              <Form.Label>Description</Form.Label>
              <ReactQuill
                theme="snow"
                value={description}
                onChange={setDescription}
                modules={modules}
                formats={formats}
                placeholder="Write livestock information..."
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant={editIndex !== null ? 'primary' : 'success'} type="submit">
                {editIndex !== null ? 'Update Info' : 'Save Info'}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      {/* Display Livestock Info */}
      <h4 className="mt-5">Saved Livestock Information</h4>
      <Row>
        {livestockList.map((item, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card className="h-100">
              <div style={{ padding: 0 }}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{
                    height: '160px',
                    width: '100%',
                    objectFit: 'cover',
                    borderTopLeftRadius: '6px',
                    borderTopRightRadius: '6px',
                    margin: 0,
                  }}
                />
              </div>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <div
                  className="mb-2"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                  style={{
                    maxHeight: '120px',
                    overflowY: 'auto',
                  }}
                />
                <Button
                  variant="outline-primary"
                  size="sm"
                  className="me-2"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </Button>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => handleDelete(index)}
                >
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

export default AddLivestockInfo;
