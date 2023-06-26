import React from 'react';
import './Soon.css';
import Header from '../../components/Header';
import data1 from './Data';
class ComingSoonPage extends React.Component {
  render() {
    return (
      <>
        <div className='commingsoon-Header'>
          <Header />
        </div>
        <div className="background">
          <div className="backdrop" />
          <div className=".content-S">
            <h1 className="title">Jay Khawand's Shop</h1>
            <p className="description">We're currently working on something amazing. Stay tuned!</p>
            <a href="/services" className="home-button">Explore More</a>
          </div>
          <div className="card-container">
            {data1.map((product, index) => (
              <div className="card" key={index}>
                <h2 className="card-title">{product.title}</h2>
                <p className="card-description">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default ComingSoonPage;
