import React from 'react'
import './SectionThree.css'

function EvenItem(props) {
    return (
      <div className='about--section-three-even-container'>
       <div className='about--section-three-even-column-one'>
          <p className='about--section-three-even-title'>{props.title}.</p>
          <p className='about--section-three-even-description'>{props.description}</p>
         
      </div>
     
      <div className='about--section-three-even-column-two'>
        <div className='dots-background-three-even'>
        <img
        src={`data:image/jpeg;base64,${props.image}`}
        alt="section-three-background"
        className='about-section-three-even-image'
      />
        {/* <img src={dots} alt="image" className='about-section-three-even-image'/> */}
        <div className='transparent-dots-three-even'></div>
        </div>
      </div>
     
        
      </div>
    )
  }

export default EvenItem
