import React from 'react';
import './Soon.css';
import Header from '../../components/Header';

class ComingSoonPage extends React.Component {
  render() {
    return (
      <>
        <div className='commingsoon-Header'>
          <Header />

        </div>
        <div className="background">

          <div className="backdrop" />

          <div className="content">

            <h1 className="title">Jay Khawand's Shop</h1>
            <p className="description">We're currently working on something amazing. Stay tuned!</p>
            <a href="/services" className="home-button">Explore More</a>
          </div>

          <div className="card-container">
            <div className="card">
              <h2 className="card-title">Product Title 1</h2>
              <p className="card-description">Description of Product 1</p>
            </div>
            <div className="card">
              <h2 className="card-title">Product Title 2</h2>
              <p className="card-description">Description of Product 2</p>
            </div>
            <div className="card">
              <h2 className="card-title">Product Title 3</h2>
              <p className="card-description">Description of Product 3</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ComingSoonPage;
