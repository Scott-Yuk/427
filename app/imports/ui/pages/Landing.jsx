import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-3">
    <Row className="align-middle text-center">
        <h1>Welcome to SafePass!</h1>
        <p>Save your passwords today!</p>

    </Row>
  </Container>
);

export default Landing;
