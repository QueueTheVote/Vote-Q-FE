import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function NavigationBar({match,location}) {
  return (
    <div>
      <div className="row m-0">
        <div className="col-12 p-0">
            <Navbar bg="light" variant="light" expand="lg" sticky="top">
              <Navbar.Brand>
                <Link to="/"><img className="pl-2" alt="Voting Q" src="../assets/images/logo-purple.svg"/></Link>
              </Navbar.Brand>
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
