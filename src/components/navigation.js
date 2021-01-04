import React from "react"
import { Nav } from "react-bootstrap"
import Navbar from "react-bootstrap/Navbar"

const Navigation = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Navbar.Brand href="/">Vishnu M Menon</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
      <Nav className="mr-auto">
        <Nav.Link href="/resume">Resume</Nav.Link>
        <Nav.Link href="/about">About Me</Nav.Link>
        <Nav.Link href="/contact">Get in Touch</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Navigation
