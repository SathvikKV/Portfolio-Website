import React from "react";

function Contact() {
  return (
    <section className="contact-section fade-in">
      <h2 className="section-title">Contact</h2>
      <p>
        Feel free to reach out to me via email or through the contact form
        below.
      </p>

      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" placeholder="Your Name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" placeholder="Your Email" required />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
        </label>
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
