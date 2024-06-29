import React from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Sports Infrastructure Management System</h1>
        <p>Manage your sports facilities with ease. Book, schedule, and maintain all in one place.</p>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="/register">Register</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/facilities">View Facilities</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Container fluid>
          <Row className="mb-4">
            <Col>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/1200x400?text=Slide+1"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Discover Our Facilities</h3>
                    <p>Explore a wide range of sports facilities available for booking.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/1200x400?text=Slide+2"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Book Your Slot</h3>
                    <p>Convenient booking system with real-time availability.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/1200x400?text=Slide+3"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Maintenance Updates</h3>
                    <p>Stay informed about maintenance schedules and updates.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <h2>Latest News</h2>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>News Title 1</Card.Title>
                  <Card.Text>
                    Brief description of the latest news item. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>News Title 2</Card.Title>
                  <Card.Text>
                    Another news item description. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <h2>Events</h2>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Event Title 1</Card.Title>
                  <Card.Text>
                    Description of an upcoming event. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Event Title 2</Card.Title>
                  <Card.Text>
                    Another event description. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
