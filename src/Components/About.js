import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container fluid className="about-container">
      <Row className="align-items-center">
        <Col md={6} className="about-image">
          {/* Image on one side */}
          <img src="https://img.freepik.com/premium-photo/female-bookkeeper-holding-dollars-fan-her-hand_266732-15757.jpg?w=900" alt="About" className="img-fluid" />
        </Col>
        <Col md={6} className="about-content">
          {/* Content about expense tracker on the other side */}
          <div className="content-wrapper">
            <h2 className="content-title">About Expense Tracker</h2>
            <p className="content-text">
            Welcome to our expense tracker website, where we believe that managing your finances should be simple and stress-free. Our platform was born out of a passion for empowering individuals to take control of their financial lives. We understand the challenges of keeping track of expenses and staying within budget, which is why we've developed an intuitive and user-friendly solution. With our expense tracker, you can effortlessly monitor your spending, categorize expenses, set budgets, and gain valuable insights into your financial habits. Whether you're a seasoned budgeter or just starting your journey to financial wellness, our platform is designed to cater to your needs. Join us as we strive to provide you with the tools and support you need to achieve your financial goals and live a more financially secure life.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
