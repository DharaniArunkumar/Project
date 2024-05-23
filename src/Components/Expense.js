import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


const Expense = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit the form data to your backend or do further processing
    console.log({ name, amount, description, date, category });
  };

  return (
    <div className="expense-form-container"> {/* Add a container div */}
      <h2>Expense Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="amount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select category</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            {/* Add more options as needed */}
          </Form.Control>
        </Form.Group>

        <Button type="submit" className="submit-button TealButton">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Expense;

