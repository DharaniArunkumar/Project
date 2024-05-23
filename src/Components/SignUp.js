// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { Form, Button, Container } from 'react-bootstrap';


// // function SignUp() {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const formData = {
// //       username: name,
// //       email: email,
// //       password: password,
// //     };

// //     const loginresponse = await axios.post('http://localhost:3001/users/signup', formData)
// //       .then(res => {
// //         console.log(res);
// //         setIsSubmitted(true); // Set form submission status to true
// //       })
// //       .catch(err => console.log(err));
// //   };

// //   return (
// //     <Container className="mt-5">
// //       <Form onSubmit={handleSubmit} className={`expense-form-container sign-up-form ${isSubmitted ? 'submitted' : ''}`}>
// //         <h1 className="mb-4 form-title">Sign Up</h1>
// //         <Form.Group controlId="formName">
// //           <Form.Label>Name</Form.Label>
// //           <Form.Control
// //             type="text"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             placeholder="Enter your name"
// //             className="form-input"
// //           />
// //         </Form.Group>
// //         <Form.Group controlId="formEmail">
// //           <Form.Label>Email</Form.Label>
// //           <Form.Control
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             placeholder="Enter your email"
// //             className="form-input"
// //           />
// //         </Form.Group>
// //         <Form.Group controlId="formPassword">
// //           <Form.Label>Password</Form.Label>
// //           <Form.Control
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             placeholder="Enter your password"
// //             className="form-input"
// //           />
// //         </Form.Group>
// //         <Button type="submit" className="submit-button TealButton">
// //           Submit
// //         </Button>
// //       </Form>
// //     </Container>
// //   );
// // }

// // export default SignUp;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { Form, Button, Container, Alert } from 'react-bootstrap'; // Import Alert from react-bootstrap

// function SignUp() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission
//   const [error, setError] = useState(null); // State to store error message

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     try {
//       const formData = {
//         username: name,
//         email: email,
//         password: password,
//       };
//       console.log(formData);
//       const response = await axios.post(`​http://localhost:3001/auth/signup`, formData);

//       setIsSubmitted(true);
//     } catch (err) {
//       setError(err.response.data.message);
//     }
//   };

//   return (
//     <Container className="mt-5">
//       <Form onSubmit={handleSubmit} className={`expense-form-container sign-up-form ${isSubmitted ? 'submitted' : ''}`}>
//         <h1 className="mb-4 form-title">Sign Up</h1>

//         {/* Display error message if there is one */}
//         {error && <Alert variant="danger">{error}</Alert>}

//         <Form.Group controlId="formName">
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter your name"
//             className="form-input"
//           />
//         </Form.Group>
//         <Form.Group controlId="formEmail">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             className="form-input"
//           />
//         </Form.Group>
//         <Form.Group controlId="formPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//             className="form-input"
//           />
//         </Form.Group>
//         <Button type="submit" className="submit-button TealButton">
//           Submit
//         </Button>
//       </Form>
//     </Container>
//   );
// }

// export default SignUp;


import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Alert } from 'react-bootstrap'; // Import Alert from react-bootstrap

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission
  const [error, setError] = useState(null); // State to store error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const formData = {
        username: name,
        email: email,
        password: password,
      };
      console.log(formData);
      const response = await axios.post(`http://localhost:3001/auth/signup`, formData); // Fixed the URL

      setIsSubmitted(true);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit} className={`expense-form-container sign-up-form ${isSubmitted ? 'submitted' : ''}`}>
        <h1 className="mb-4 form-title">Sign Up</h1>

        {/* Display error message if there is one */}
        {error && <Alert variant="danger">{error}</Alert>}

        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="form-input"
          />
        </Form.Group>
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
        <Button type="submit" className="submit-button TealButton">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default SignUp;
  