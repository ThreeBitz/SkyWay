import React, { useContext, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { signInWithGoogle, logout } from '../../services/auth'
import { UserContext } from '../../contexts/user';
import { NavLink } from 'react-router-dom';

function Header() {

  const [user, setUser] = useContext(UserContext).user;

  const signInBtnClick = async () => {
    let userBySignIn = await signInWithGoogle();
    if (userBySignIn) setUser(userBySignIn);
    console.log(userBySignIn);
  };


  return (
    <Navbar  variant="dark" class="navbar navbar-dark bg-light">
      <Container>
        <div>
      <img src={require("../../Assests/logo.png").default}  height="120px"  class="d-inline-block align-top" alt=""></img>
      </div>
        {/* <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="p-3 mb-2 bg-light text-dark">Search</Button>
        </Form> */}
        <Nav className="me-auto">
          {/* <Nav.Link><Button variant="p-3 mb-2 bg-light text-dark" onClick={logout}>Logout</Button></Nav.Link> */}
          <Nav.Link>
            {user ? <img src={user.photoURL} height="35px" border-radius="8px" /> : <Button variant="p-3 mb-2 bg-light text-dark" onClick={signInBtnClick}>Signin with google</Button>}
            <Button class="btn btn-info" onClick={signInBtnClick}>Signin with google</Button>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
