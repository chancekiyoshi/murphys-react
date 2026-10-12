'use client';

import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer id="bottomMenu" className="py-4 text-white">
      <Container>
        <Row>
          <Col md={4}>
            <p className="fw-bold mb-1">Lunch</p>
            <hr className="my-2" />
            <p className="mb-0">Monday - Friday: 11:00am - 2:30pm</p>
            <p className="mb-0">Saturday - Sunday: Not open</p>
          </Col>
          <Col md={4}>
            <p className="fw-bold mb-1">Bar</p>
            <hr className="my-2" />
            <p className="mb-0">Monday - Friday: From 11:00am to closing</p>
            <p className="mb-0">Saturday - Sunday: Not open</p>
          </Col>
          <Col md={4}>
            <p className="fw-bold mb-1">Dinner</p>
            <hr className="my-2" />
            <p className="mb-0">Monday - Friday: 5:00pm - 9:00pm</p>
            <p className="mb-0">Saturday - Sunday: Not open</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}