import React, { useState } from 'react'

import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails)
  const [buttonText, setButtonText] = useState('Send')
  const [status, setStatus] = useState({})

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setButtonText('Sending...')
    let response = fetch('https://localhost:5050/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json;charset=utf-8',
      },
      body: JSON.stringify(formDetails)
    })
    setButtonText('Send')
    const result = response.json()
    setFormDetails(formInitialDetails)
    if (result.code === 200) {
      setStatus({ success: true, message: 'Message sent successfully.'})
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.'})
    }
  }

  return (
    <section id='contact' className='contact'>
      <Container> 
        <Row className='align-items-center'>

          <Col md={6}>
            <img src={contactImg} alt='Contact Us' />
          </Col>
          
          <Col md={6}> 

            <h2>Get In Touch</h2>

            <form>
              <Row>
                <Col className='px-1' sm={6}>
                  <input 
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                    type='text' 
                    value={formDetails.firstName} 
                    placeholder='First Name' 
                  />
                </Col>
                <Col className='px-1' sm={6}>
                  <input 
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                    type='text' 
                    value={formDetails.lastName} 
                    placeholder='Last Name' 
                  />
                </Col>
                <Col className='px-1' sm={6}>
                  <input 
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                    type='email' 
                    value={formDetails.email} 
                    placeholder='Email Address' 
                  />
                </Col>
                <Col className='px-1' sm={6}>
                  <input 
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                    type='phone' 
                    value={formDetails.lastName} 
                    placeholder='Phone No.' 
                  />
                </Col>
                <Col>
                  <textarea 
                    placeholder='Message'
                    onChange={(e) => onFormUpdate('message', e.target.message)}
                    value={formDetails.message}
                  />
                  <button type='submit'>
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
              {
                status.success && 
                  <Col>
                    <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                  </Col>
              }
            </form>

          </Col>
        </Row>
      </Container>
    </section>
  )
}