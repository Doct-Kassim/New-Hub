// src/pages/CropDetails.js
import React, { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

const CropDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [crop, setCrop] = useState(null);

  useEffect(() => {
    const storedCrops = JSON.parse(localStorage.getItem('cropTechniques')) || [];
    const selectedCrop = storedCrops[parseInt(id)];
    if (selectedCrop) {
      setCrop(selectedCrop);
    } else {
      navigate('/crops');
    }
  }, [id, navigate]);

  if (!crop) return null;

  return (
    <div style={{ padding: 0, margin: 0, width: '100%' }}>
      {/* Back button */}
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

      {/* Title */}
      <h1
        style={{
          textAlign: 'center',
          marginTop: '60px',
          fontWeight: 'bold',
          color: '#28a745',
        }}
      >
        {crop.title}
      </h1>

      {/* Image */}
      {crop.image && (
        <img
          src={crop.image}
          alt={crop.title}
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            marginTop: '20px',
            objectFit: 'cover',
          }}
        />
      )}

      {/* Description */}
      <div
        style={{
          width: '100%',
          marginTop: '20px',
          fontSize: '18px',
          lineHeight: '1.6',
          padding: '10px 20px',
        }}
        dangerouslySetInnerHTML={{ __html: crop.description }}
      />
    </div>
  );
};

export default CropDetails;
