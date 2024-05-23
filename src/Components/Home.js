import React from 'react';
import { Button } from 'react-bootstrap';


function Home() {
  return (
    <div className='home-container'>
      <div className="background-image">
        <div className="overlay">
          <div className="content">
            <h1>Welcome to Your Expense Tracker</h1>
            <p>Take control of your finances and manage <br></br>your expenses effectively!</p>
            <Button className="btn-get-started">Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
