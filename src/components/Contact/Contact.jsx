import React from "react";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import AboutHeader from "../About/AboutHeader/AboutHeader";
import ba from '../../images/ba.jpg'
import ContactCard from "./ContactCard";
import './Contact.css'
import ContactForm from "./ContactForm";


export const Contact = () => {
  return (
    <div>
        <AboutHeader backgroundImage={ba} />
   
    <div className="contact-page">
      <div className="contact-details">
  
        <ContactCard icon={ <BsTelephone style={{height:28, width:28}}/>} title="Call us" address="00 000 00 000 000"/>
        <ContactCard icon={ <HiOutlineMail style={{height:28, width:28}}/>} title="send us an email" address="info@jaykhawand.com"/>
        <ContactCard icon={ <SlLocationPin style={{height:28, width:28}}/>} title="visit our office" address="Jay Khawand Studios, Sinn el Fil, Jisr el Wati, Fattal street Younes building, 1st floor Beirut"/>


      </div>
      <div className="contact-form-background">
      <div className='contact_form_con'> 
      <div className='contact_form_conn'><ContactForm /></div>
      <div className='transparent-dotss'></div>
     
      </div>
      
      
      </div>
    </div>
    </div>
   
  );
};
