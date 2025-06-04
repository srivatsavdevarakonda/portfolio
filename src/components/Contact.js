import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_bsuoohh',      // Replace with your EmailJS service ID
      'template_x5z6r1m',     // Replace with your EmailJS template ID
      e.target,
      'n622L5oPRcT7HyT1M'          // Replace with your EmailJS public key (User ID)
    ).then(
      (result) => {
        alert('✅ Message sent successfully!');
        e.target.reset();
      },
      (error) => {
        alert('❌ Failed to send message. Try again later.');
        console.error(error.text);
      }
    );
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <div className="section-title text-center mb-5" data-aos="fade-up">
          <h2>Contact Me</h2>
          <p className="lead">Let's work together</p>
        </div>

        <div className="row">
          <div className="col-md-6" data-aos="fade-right" data-aos-delay="100">
            <div className="contact-info mb-4">
              <h4>Get in Touch</h4>
              <p>Feel free to reach out to me for any inquiries or collaboration opportunities.</p>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>Location: Andhra Pradesh, India</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <p>Email: devarakondasrivatsav@gmail.com</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone-alt"></i>
                <p>Phone: +91 8688319072</p>
              </div>
            </div>
          </div>

          <div className="col-md-6" data-aos="fade-left" data-aos-delay="200">
            <form onSubmit={sendEmail} className="contact-form">
              <div className="mb-3">
                <input type="text" name="name" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <input type="email" name="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="mb-3">
                <input type="text" name="subject" className="form-control" placeholder="Subject" />
              </div>
              <div className="mb-3">
                <textarea name="message" className="form-control" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
