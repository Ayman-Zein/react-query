import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>React Query</Navbar.Brand>
            <Nav className="me-auto ">
              <NavLink to="/" end>
                Lorem Blog
              </NavLink>
              <NavLink to="/infinite-swapi">Infinite Swapi</NavLink>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Root;
