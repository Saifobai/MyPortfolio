import React, { useState, useRef } from "react";

import "../styles/contact.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import planet from "../assets/planet2.png";

const Contact = () => {
  const form = useRef();

  // const handleInputChange = (event) => {
  //   const { name, type, value } = event.target;

  //   setFormData((prevFormState) => ({
  //     ...prevFormState,
  //     [name]: value,
  //   }));
  // };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yjm3bx8",
        "template_x9er8v3",
        form.current,
        "070T6zFSw6MSJ21a1"
      )
      .then(
        (result) => {
          toast.success("Email sent successfully", {
            position: toast.POSITION.TOP_RIGHT,
          });
          console.log(result.text);
        },
        (error) => {
          toast.error("Failed to send the email", {
            position: toast.POSITION.TOP_RIGHT,
          });

          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <img className="contact__img" src={planet} alt="" />
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            type="text"
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="your message"
          />
          <button className="btn btn-primary" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
