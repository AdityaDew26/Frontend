import React, { useState } from 'react';
import "./contact.css"

const baseurl ="https://backend-87yy.onrender.com"
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const contactData = { name, email, message };

    try {
      const response = await fetch(`${baseurl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Error sending message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container" id='contact'>

      {/* Address Section */}
      <div className='address'>
        <img src="https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg" alt="" />
        <h3>Our Address</h3>
        <p>123 Business Avenue, Suite 100, New York, NY 10001</p>
        <p>Monday to Friday: 9:00 AM - 6:00 PM</p>
      </div>

       <div className="form">
        <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
          type="text"
          cols="30"
          rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      </div>
    </div>
  );
}

export default Contact;
