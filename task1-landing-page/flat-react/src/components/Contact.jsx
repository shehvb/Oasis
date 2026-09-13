import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace "YOUR_FORMSPREE_FORM_ID" with your actual Formspree form ID (e.g. "xoqydnrz")
    const formspreeFormId = "YOUR_FORMSPREE_FORM_ID";
    const formspreeUrl = `https://formspree.io/f/${formspreeFormId}`;

    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          subject,
          message,
        })
      });

      if (response.ok) {
        alert('Thank you! Your message has been sent successfully.');
        setName('');
        setEmail('');
        setPhone('');
        setSubject('');
        setMessage('');
      } else {
        const data = await response.json();
        alert(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form to Formspree:', error);
      alert('An error occurred while sending the message. Please try again.');
    }
  };

  return (
    <section id="contact">
      <div className="containerrr animate-on-scroll" data-animation="fade-in">
        <div className="contact-section">
          <div className="form-container animate-on-scroll" data-animation="slide-in-left">
            <form onSubmit={handleSubmit}>
              {/* Name and Email row */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <i className="fas fa-user"></i>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <i className="fas fa-envelope"></i>
                  </div>
                </div>
              </div>

              {/* Number and Subject row */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="number">Number</label>
                  <div className="input-wrapper">
                    <input
                      type="tel"
                      id="number"
                      name="phone"
                      placeholder="Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <i className="fas fa-phone-alt"></i>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                    <i className="fas fa-text-height"></i>
                  </div>
                </div>
              </div>

              {/* Message row */}
              <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <div className="input-wrapper textarea-wrapper">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <i className="fas fa-comment-dots"></i>
                </div>
              </div>

              {/* Submit button */}
              <button type="submit" className="submit-button">
                Submit
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>

          <div className="contact-info-container animate-on-scroll" data-animation="slide-in-right">
            <div className="contact-header">
              <h1>Get in touch</h1>
              <p>Stop wasting time and money designing and managing a website that doesn't get results. Happiness guaranteed!</p>
            </div>
            <div className="contact-items">
              {/* Phone item */}
              <div className="contact-item">
                <div className="icon-circle">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <span className="contact-text">+20 10 90301213</span>
              </div>
              {/* Email item */}
              <div className="contact-item">
                <div className="icon-circle">
                  <i className="fas fa-envelope"></i>
                </div>
                <span className="contact-text">eslamahmed912@gmail.com</span>
              </div>
              {/* Address item */}
              <div className="contact-item">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <span className="contact-text">25 hassan el ma2mon madinet nasr st, Cairo, Egypt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
