// src/pages/DiseaseDetail.js
import React, { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

const DiseaseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [disease, setDisease] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('diseaseData')) || [];
    const selected = stored[parseInt(id)];
    if (selected) {
      setDisease(selected);
    } else {
      navigate('/diseases');
    }
  }, [id, navigate]);

  if (!disease) return null;

  return (
    <div style={{ padding: 0, margin: 0, width: '100%' }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          backgroundColor: '#f8f9fa',
          border: '1px solid #ccc',
          padding: '5px 10px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        ← Back
      </button>

      <h1
        style={{
          textAlign: 'center',
          marginTop: '60px',
          fontWeight: 'bold',
          color: '#dc3545',
        }}
      >
        {disease.title}
      </h1>

      <div
        style={{
          width: '100%',
          marginTop: '20px',
          fontSize: '18px',
          lineHeight: '1.6',
          padding: '10px 20px',
        }}
        dangerouslySetInnerHTML={{ __html: disease.description }}
      />
    </div>
  );
};

export default DiseaseDetail;
