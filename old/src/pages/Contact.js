import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <h2 className="section-title">Get in Touch</h2>
      <p className="contact-text">
        Have a question, collaboration idea, or just want to say hi? Feel free
        to reach out!
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <h3>📧 Email</h3>
          <p>
            <a href="mailto:sathvik@example.com">sathvik@example.com</a>
          </p>

          <h3>🔗 LinkedIn</h3>
          <p>
            <a
              href="https://www.linkedin.com/in/sathvikvadavatha/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/sathvikvadavatha
            </a>
          </p>

          <h3>💼 GitHub</h3>
          <p>
            <a
              href="https://github.com/SathvikKV"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/SathvikKV
            </a>
          </p>
        </div>

        <div className="contact-form-container">
          <form className="contact-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
