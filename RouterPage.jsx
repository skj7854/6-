import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Switch } from 'react-router-dom';
import Bookpage from './Bookpage';
import Homepage from './Homepage';

const RouterPage = () => {
        return (

          <Navbar bg="light" expand="lg">
            <Container fluid>
                <Link to="/book">LOGO</Link>
              <Navbar.Brand href="#">LOGO</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll>
                <Link to ="/">홈</Link>
                <Link to ="/book">도서검색</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Switch>
            <Route path="/" component={Homepage} exact={true}/>
            <Route path="/book" component={Bookpage}/>
          </Switch>
        )
}
export default RouterPage;