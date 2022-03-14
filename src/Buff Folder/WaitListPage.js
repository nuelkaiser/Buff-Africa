import React from 'react';
import Footer from '../Resusable/Footer';
import './WaitListPage.css';
import { AiFillThunderbolt } from 'react-icons/ai';
import emailjs from 'emailjs-com';

function sendSubscribers(e) {
  e.preventDefault();

  emailjs.sendForm('service_pc18qbj', 'template_rdstg3a', e.target, 'gDwc1b1z9wwHYSl1p')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });

  e.target.reset()
}

function WaitListPage() {
  return (
    <div>
      <div className='access-container'>
        <div className='access-signup'>
          <div className='access-words'>
            <h1>
              Get early access
            </h1>

            <h3>Excited to try out Buffer? We are too!</h3>
          </div>

          <div className='signup-container'>
            <div className='join'>
              <span>
                <AiFillThunderbolt className='thunder' />
              </span>
              <h1>Join  the waitlist</h1>
              <p>Join the waitlist and we'll contact you for access.</p>
            </div>


            <div className='form-container'>
              <form onSubmit={sendSubscribers}>
                <input className='name-input' placeholder='First Name' type='text' name='name' />
                <input className='email-input' placeholder='Email' type='email' name='email' />


                <div className='submit-btn'>
                  <button >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default WaitListPage