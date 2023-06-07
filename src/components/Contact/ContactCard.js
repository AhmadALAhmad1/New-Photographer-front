import React from 'react'
import './Contact.css'

function ContactCard(props) {
  return (
    <div>
        <div className="contact-card">
        <div className='contact-icon'> {props.icon}</div>
          <div className="contact-address">
          <p className="contact-title">{props.title}</p>
          <p className='contact-title-description'>{props.address}</p>
          </div>
        </div>
    </div>
  )
}

export default ContactCard
