'use client';

import { Container, Row, Col } from 'react-bootstrap';

export default function MiddleSection() {
  return (
    <div id="centerText" className="d-flex align-items-center justify-content-center text-center text-white">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={8} style={{ maxWidth: '500px' }}>
            <h3 className="fw-bold mb-3">
              Now accepting reservations for St Patrick&apos;s Day
            </h3>
            <h4 className="fw-bold mb-3">
              Please call 808-531-0422 for reservations
            </h4>
            <h4 className="fw-bold">
              St Patrick&apos;s Day To-Go Orders can be ordered on our website menu.
            </h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
}