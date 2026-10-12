'use client';

import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import { Facebook, Instagram, Twitter } from 'react-bootstrap-icons';

export default function TopMenu() {
  return (
    <Navbar id="topMenu" expand="lg" className="py-2">
      <Container>
        <Navbar.Brand href="#">
          <Image src="/murphyslogowhite.png" width={200} alt="Murphy's Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#" className="text-white fw-bold px-3">Home</Nav.Link>
            <Nav.Link href="#" className="text-white fw-bold px-3">About Us</Nav.Link>
            <Nav.Link href="#" className="text-white fw-bold px-3">St. Patrick&apos;s Day</Nav.Link>
            <Nav.Link href="#" className="text-white fw-bold px-3">To Go Ordering</Nav.Link>
            <Nav.Link href="#" className="text-white px-2"><Instagram /></Nav.Link>
            <Nav.Link href="#" className="text-white px-2"><Facebook /></Nav.Link>
            <Nav.Link href="#" className="text-white px-2"><Twitter /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
