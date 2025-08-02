// src/pages/MarketPrices.js
import React, { useEffect, useState } from 'react';

import { Container, Accordion, Card } from 'react-bootstrap';

const MarketPrices = () => {
  const [marketFiles, setMarketFiles] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('marketPrices')) || [];
    setMarketFiles(stored);
  }, []);

  return (
    <Container className="mt-4">
      <h3>Market Prices</h3>
      {marketFiles.length === 0 ? (
        <p>No market price files available.</p>
      ) : (
        <Accordion defaultActiveKey="0">
          {marketFiles.map((file, index) => (
            <Accordion.Item eventKey={index.toString()} key={file.id}>
              <Accordion.Header>{file.title}</Accordion.Header>
              <Accordion.Body>
                <embed
                  src={file.fileData}
                  type="application/pdf"
                  width="100%"
                  height="600px"
                />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
    </Container>
  );
};

export default MarketPrices;
