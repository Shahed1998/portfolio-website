import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ContactHandler from '../assets/JS/ContactHandler';

const Contact = () => {
  const form = useRef();
  const contactHandlerCode = new ContactHandler(form, emailjs);

  // -----------------------------------------------------
  return (
    <div className='col-sm-12 col-lg-6'>
      <div className='container mt-5' style={{ minHeight: '90vh' }}>
        <div className='row'>
          <div className='col-12'>
            <h1 style={{ fontSize: '24px' }}>Contact me</h1>
          </div>
          <div className='col-12'>
            <form method='post' ref={form}>
              <input
                type='text'
                placeholder='Full name'
                className='w-100 p-2 mb-3'
                name='name'
              />
              <input
                type='text'
                placeholder='Email'
                className='w-100 p-2 mb-3'
                name='email'
              />
              <textarea
                name='message'
                id=''
                cols='30'
                rows='10'
                className='w-100 mb-3 p-2'
                placeholder='Text me, I will get back to you as soon as possible.'
                style={{ resize: 'none' }}
              ></textarea>
              <button
                className='btn btn-primary w-100 p-3'
                onClick={contactHandlerCode.sendEmail}
                style={{
                  backgroundColor: '#FF4A4A',
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
