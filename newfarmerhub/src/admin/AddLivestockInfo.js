import React, { useState, useEffect } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';

const AddLivestockInfo = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [infos, setInfos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('livestockInfo')) || [];
    setInfos(stored);
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
    const newInfo = { title, image, description };

    const updated = editIndex !== null
      ? infos.map((info, i) => i === editIndex ? newInfo : info)
      : [...infos, newInfo];

    localStorage.setItem('livestockInfo', JSON.stringify(updated));
    setInfos(updated);
    setTitle('');
    setImage('');
    setDescription('');
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    const info = infos[index];
    setTitle(info.title);
    setImage(info.image);
    setDescription(info.description);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = infos.filter((_, i) => i !== index);
    localStorage.setItem('livestockInfo', JSON.stringify(filtered));
    setInfos(filtered);
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
          <h3 className="mb-4">{editIndex !== null ? 'Edit Livestock Info' : 'Add Livestock Info'}</h3>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter livestock title"
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
                placeholder="Write livestock information..."
              />
            </Form.Group>

            <div className="d-grid">
              <Button type="submit" variant={editIndex !== null ? 'primary' : 'success'}>
                {editIndex !== null ? 'Update Info' : 'Save Info'}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      <h4 className="mt-5">Saved Livestock Info</h4>
      <Row>
        {infos.map((info, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={info.image}
                style={{
                  height: '160px',
                  width: '100%',
                  objectFit: 'cover',
                  borderTopLeftRadius: '6px',
                  borderTopRightRadius: '6px',
                }}
              />
              <Card.Body>
                <Card.Title>{info.title}</Card.Title>
                <div
                  className="mb-2"
                  dangerouslySetInnerHTML={{ __html: info.description }}
                  style={{ maxHeight: '120px', overflowY: 'auto' }}
                />
                <Button size="sm" className="me-2" onClick={() => handleEdit(index)} variant="outline-primary">
                  Edit
                </Button>
                <Button size="sm" onClick={() => handleDelete(index)} variant="outline-danger">
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
