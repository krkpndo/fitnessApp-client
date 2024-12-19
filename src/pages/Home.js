import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section text-center py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <h1>Welcome to FitnessApp</h1>
        <p>Your journey to a healthier, stronger you starts here.</p>
        <Button variant="primary" size="lg" as={Link} to="/register">
          Join Now
        </Button>
      </div>

      {/* Features Section */}
      <Container className="py-5 text-center">
        <h2>What We Offer</h2>
        <Row>
          <Col md={4}>
            <h4>Personalized Plans</h4>
            <p>Get workout plans tailored to your goals and fitness level.</p>
          </Col>
          <Col md={4}>
            <h4>Expert Trainers</h4>
            <p>Learn from certified trainers and get the guidance you need.</p>
          </Col>
          <Col md={4}>
            <h4>Community Support</h4>
            <p>Join a supportive community that helps keep you motivated.</p>
          </Col>
        </Row>
      </Container>

      {/* Call to Action */}
      <div className="cta-section text-center py-5" style={{ backgroundColor: '#343a40', color: 'white' }}>
        <h2>Ready to Get Started?</h2>
        <Button variant="light" size="lg" as={Link} to="/register">
          Sign Up Today
        </Button>
      </div>

      {/* Footer Section */}
      <div className="footer text-center py-4" style={{ backgroundColor: '#222', color: 'white' }}>
        <p>&copy; 2024 FitnessApp. All rights reserved.</p>
      </div>
    </>
  );
}
