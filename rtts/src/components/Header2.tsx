import React from 'react'
import {Navbar,Container,Nav,} from 'react-bootstrap'
import {MobileMenuData} from './MobileMenuData'
function Header2() {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Run-Together</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {MobileMenuData.map((item)=>{
              return(
                  <Nav.Link href={item.path} key={item.id}>{item.icon}{item.title}</Nav.Link>
              )
          })}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header2