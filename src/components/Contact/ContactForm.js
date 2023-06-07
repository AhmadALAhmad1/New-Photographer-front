import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

function ContactForm() {
  const form = useRef();

  const resetForm = () => {
    form.current.reset();
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p9vsaym",
        "template_k8cscfj",
        form.current,
        "uI4RZWLdhav0v9t1W"
      )
      .then(
        (result) => {
          console.log(result.text);
          resetForm();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form-container">
      <div>
        <p className="about-contact-form-title">Get in Touch</p>
        <form ref={form} onSubmit={sendEmail} className="form-query">
          <div className="subject-query">
            <textarea
              type="text"
              id="subject-question-query"
              name="text"
              placeholder="Full Name"
            />
          </div>
          <div className="user-email">
            <textarea
              type="email"
              id="user-email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <div className="message-query">
            <textarea
              type="text"
              id="query-writing-message"
              name="message"
              placeholder="Your Message"
            />
          </div>
          <button type="submit" className="button-contact-form">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
