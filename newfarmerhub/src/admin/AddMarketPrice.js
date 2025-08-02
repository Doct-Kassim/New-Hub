import React, { useState, useEffect } from 'react';

import { Form, Button, Card, Container, Table } from 'react-bootstrap';

const AddMarketPrice = () => {
  const [title, setTitle] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem('marketPrices')) || [];
    setFiles(storedFiles);
  }, []);

  const handleUpload = () => {
    if (!title || !pdfFile) return alert("Weka title na chagua file!");

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result; // includes data:application/pdf;base64,...

      // Optional: sanity check base64 prefix
      if (!base64String.startsWith('data:application/pdf;base64,')) {
        alert('Invalid PDF file format!');
        return;
      }

      const newFile = {
        id: Date.now().toString(),
        title,
        fileData: base64String,
      };
      const updatedFiles = [...files, newFile];
      setFiles(updatedFiles);
      localStorage.setItem('marketPrices', JSON.stringify(updatedFiles));
      setTitle('');
      setPdfFile(null);
    };
    reader.readAsDataURL(pdfFile);
  };

  const handleDelete = (id) => {
    const updated = files.filter(file => file.id !== id);
    setFiles(updated);
    localStorage.setItem('marketPrices', JSON.stringify(updated));
  };

  return (
    <Container className="mt-4">
      <h3>Add Market Price File</h3>
      <Card className="p-3 mb-4">
        <Form onSubmit={e => e.preventDefault()}>
          <Form.Group className="mb-3">
            <Form.Label>File Title (e.g., Bei za Mwaka 2025)</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Andika title hapa"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Upload PDF File</Form.Label>
            <Form.Control
              type="file"
              accept="application/pdf"
              onChange={e => setPdfFile(e.target.files[0])}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleUpload}>
            Upload
          </Button>
        </Form>
      </Card>

      <h5>Uploaded Files</h5>
      {files.length === 0 && <p>Hakuna faili lolote lime upload.</p>}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Preview</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {files.map(file => (
            <tr key={file.id}>
              <td>{file.title}</td>
              <td>
                <Button
                  variant="success"
                  onClick={() => window.open(file.fileData, '_blank')}
                >
                  View
                </Button>
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(file.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AddMarketPrice;
