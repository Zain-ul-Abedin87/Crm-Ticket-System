import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import logo from "../../assets/img/logo.png"
const Header = () => {
    return (
       <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
           <Navbar.Brand>
               <img src={logo} width="50px"/>
           </Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav"/>
           <Navbar.Collapse>
               <Nav id="basic-navbar-nav" className="ml-auto">
                   <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                   <Nav.Link href="/tickets">Tickets</Nav.Link>
                   <Nav.Link href="/logout">LogOut</Nav.Link>
               </Nav>
           </Navbar.Collapse>
       </Navbar>
    )
}

export default Header
