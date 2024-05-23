import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Logging in with email:", email, "and password:", password);
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit} className="login-form">
        <h1 className="mb-4 form-title">Login</h1>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email" 
            className="form-input"
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
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
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;

