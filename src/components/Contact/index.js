import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import { 
    Container, 
    Wrapper, 
    Title, 
    Desc, 
    ContactForm, 
    ContactTitle, 
    ContactInput, 
    ContactInputMessage, 
    ContactButton 
} from './ContactStyle';

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const form = useRef();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(form.current);
    const fromEmail = formData.get('from_email');
    const fromName = formData.get('from_name');
    const subject = formData.get('subject');
    const message = formData.get('message');

    if (!fromEmail || !fromName || !subject || !message) {
      setErrorMessage('All fields are required.');
      setError(true);
      return;
    }

    if (!validateEmail(fromEmail)) {
      setErrorMessage('Please enter a valid email address.');
      setError(true);
      return;
    }

    emailjs.sendForm('service_emkngp8', 'template_34sxxvg', form.current, '0Hl3ZyU5_mAOjXsSB')
      .then(() => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        setErrorMessage('Failed to send email. Please try again.');
        setError(true);
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any working opportunities!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>📩 Email Me 📩</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" required />
          <ContactInput placeholder="Your Name" name="from_name" required />
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage placeholder="Message" rows="4" name="message" required />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
        <Snackbar
          open={error}
          autoHideDuration={6000}
          onClose={() => setError(false)}
          message={errorMessage}
          severity="error"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;