import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: name,
      email: email,
      password: password,
    };

    axios.post('http://localhost:3001/users/signup', formData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit} className="sign-up-form">
        <h1 className="mb-4 form-title">Sign Up</h1>
        <Form.Group className="mb-3 form-group" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter your name" 
            className="form-input"
          />
        </Form.Group>
        <Form.Group className="mb-3 form-group" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email" 
            className="form-input"
          />
        </Form.Group>
        <Form.Group className="mb-3 form-group" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter your password" 
            className="form-input"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-button">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default SignUp;
