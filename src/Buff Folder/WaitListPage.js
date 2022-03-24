import React from 'react';
import Footer from '../Resusable/Footer';
import './WaitListPage.css';
import { AiFillThunderbolt } from 'react-icons/ai';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';

function WaitListPage() {
  let [isOpen, setIsOpen] = useState(false);
  let [isNameInput, setIsNameInput] = useState('');
  let [isEmailInput, setIsEmailInput] = useState('');
  
  

  function sendSubscribers(e) {
    e.preventDefault();
    e.target.reset();
    emailjs.sendForm('service_accpwyc', 'template_fu2zaed', e.target, 'ES_-cEuY2erXAFQRk')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      
      console.log(e.target)
      function reset() {
        if (!isEmailInput || !isNameInput) {
          setIsOpen(false)
        } else {
          setIsOpen(true)
        }
    
        setIsEmailInput('')
        setIsNameInput('')
      }
   

      reset()

     function disable(){
        const  btn = document.getElementsByClassName('sub-btn');
            if (!isEmailInput || !isNameInput) {
              btn.disabled = true
              btn.classList.add('no-btn')
            } else {
              btn.disabled = false
              btn.classList.add('btn-btn')
            }
      }
      disable()

  }



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


            <div className='form-container' >
              <form onSubmit={sendSubscribers} name='form' >
                <input className='name-input' placeholder='First Name' type='name' name='name'  value={isNameInput} onChange={(e) => setIsNameInput(e.target.value)} />
                <input className='email-input' placeholder='Email' type='email' name='email'   value={isEmailInput} onChange={(e) => setIsEmailInput(e.target.value) }/>


                <div className='submit-btn'>
                  <button className='sub-btn' >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='fixed'>
          <Dialog.Overlay className={isOpen ? 'overlay-hidden' : 'overlay-show'} />
          <Dialog.Title className='fixed-title'>Welcome Onboard</Dialog.Title>
          <Dialog.Description className='fixed-words'>
            Welcome on board to Buffer Africa! your email has been recieved. We'll reached out to shortly.
          </Dialog.Description>
          <button className='modal-btn' onClick={() => setIsOpen(false)}>Thank you</button>
        </Dialog>

        <Footer />
      </div>
    </div>
  )
}

export default WaitListPage