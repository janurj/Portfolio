import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./MailMe.css";

export default function MailMe() {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "Jananir40@",
        "template_z5gnc7a",
        e.target,
        "VM5Sp6uonLGD6AnbH"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          e.target.reset();
        },
        () => {
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="mail-container">
      <form className="mail-box" onSubmit={sendEmail}>
        <h2>Mail Me</h2>

        <input
          className="mail-input"
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
        />

        <input
          className="mail-input"
          type="email"
          name="reply_to"
          placeholder="Your Email"
          required
        />

        <textarea
          className="mail-textarea"
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>

        <button className="mail-btn" type="submit">
          Send Message
        </button>

        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
}
