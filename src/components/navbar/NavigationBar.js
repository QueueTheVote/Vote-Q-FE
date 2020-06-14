import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default function NavigationBar({match,location}) {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
            <Navbar bg="light" variant="light" expand="lg" sticky="top">
              <Navbar.Brand>VOTER-Q</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <NavLink exact to="/"
                    activeClassName="active"
                    className ="nav-link"
                    isActive={() => location.pathname==='/'}
                  >
                    Home
                  </NavLink>
                  <NavLink  to="/voting-centers"
                    activeClassName="active"
                    className ="nav-link"
                    isActive={() => location.pathname==='/voting-centers'}
                  >
                    Voting Centers
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        </div>
      </div>
    </div>
  );
}
