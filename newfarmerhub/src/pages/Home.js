import React from 'react';

import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import './Home.css';

const carouselImages = [
  {
    id: 1,
    src: "/images/farm1.png",
    alt: "Kilimo cha kisasa",
    title: "Kilimo Bora",
    description: "Jifunze mbinu za kisasa za kilimo"
  },
  {
    id: 2,
    src: "/images/farm2.png",
    alt: "Ufugaji wa kisasa",
    title: "Ufugaji",
    description: "Mbinu bora za ufugaji wa mifugo"
  },
  {
    id: 3,
    src: "/images/farm3.webp",
    alt: "Soko la mazao",
    title: "Soko Lenye Faida",
    description: "Pata habari za bei za soko"
  },
  {
    id: 4,
    src: "/images/farm4.jpeg",
    alt: "Teknolojia ya kilimo",
    title: "Teknolojia",
    description: "Vifaa vipya vya kilimo"
  }
];

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section - Unchanged */}
      <section className="hero-section bg-primary text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1>Karibu kwenye <strong>FarmerHub</strong></h1>
              <p className="lead">
                Platform bora ya wakulima kushiriki ujuzi, habari za soko, na mazungumzo.
              </p>
              <Button 
                as={Link} 
                to="/Dashboard" 
                variant="light" 
                size="lg"
              >
                farmer Dashboard
              </Button>
            </Col>
            <Col md={6}>
              <img 
                src="/images/farmer-hero.png"
                alt="Farmer"
                className="img-fluid rounded"
                style={{ maxHeight: '400px' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Carousel Section - Updated sizing */}
      <section className="carousel-section py-4">
        <Container fluid="xxl" className="px-0 mx-auto">
          <Carousel fade interval={3000} pause={false}>
            {carouselImages.map((image) => (
              <Carousel.Item key={image.id}>
                <div style={{
                  height: '60vh',
                  minHeight: '400px',
                  maxHeight: '600px',
                  overflow: 'hidden'
                }}>
                  <img
                    className="d-block w-100 h-100"
                    src={image.src}
                    alt={image.alt}
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                      borderRadius: '8px'
                    }}
                  />
                </div>
                <Carousel.Caption className="bg-dark bg-opacity-50 rounded p-3">
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      {/* Features Section - Unchanged */}
      <section className="features-section py-5">
        <Container>
          <h2 className="text-center mb-4">Vitu Unavyoweza Kufanya</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>⛅ Hali ya Hewa</Card.Title>
                  <Card.Text>
                    Pata habari za hali ya hewa kwa eneo lako kwa siku 7 zijazo.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>💬 Forum</Card.Title>
                  <Card.Text>
                    Shiriki maswali na majibu na wakulima wenzako.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>📊 Bei za Soko</Card.Title>
                  <Card.Text>
                    Fahamu bei za mazao kwa sasa kutoka kwenye soko mbalimbali.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;