import React from 'react'
import styled from "styled-components"
import Title from './Title'


const ContactMe = () => {
    return (
      <Wrapper>
      <Title title="Contact Us"/>
    <section className="contactMe-section">
    <h2>Get In Touch</h2>
    <p>Opening Times: Mon-Sun 1700 - 2300</p>
    <article className="address-section">
      <div className="tel"><a href="tel:01216884114">0121 688 4114</a></div>
      <div className="address">
      <address>123 Stetchford Road</address>
      <address>Stetchford</address>
      <address>Birmingham</address>
      <address>B34 6BL</address>
      </div>
      </article>
      <article className="contact-form">
        <form name="contact" action="/success" data-netlify="true" data-netlify-honeypot="bot-field" method="POST">
        <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <input type="text" name="name" placeholder="name"
            className="form-control" required />
            <input type="email" name="email" placeholder="email"
            className="form-control" required />
            <input type="text" name="phone" placeholder="phone number(optional)"
            className="form-control" />
            <textarea name="message" placeholder="message" rows="5" className="form-control" required></textarea>
          </div>
          <button type="submit" className="submit-btn btn">Submit</button>
        </form>
      </article>  
    </section>
    </Wrapper>
    )
}

export default ContactMe

const Wrapper = styled.section`

.contactMe-section {  
  /* margin-top: -5vw; */
  /* background-image: linear-gradient(135deg, #777, #111); */
  background: var(--grey);
  padding-bottom: 50px;
  text-align: center; 
  padding-left: 50px;
  padding-right: 50px;
  /* margin-bottom: 20px; */
}


.contactMe-section h2 {
  margin: 0;
  padding-top: 100px;
  padding-bottom: 50px;
  text-align: center;
  font-family: 'Satisfy', cursive;
  font-weight: 400;
}
.address-section {
  padding-bottom: 50px;
  text-align: center; 
  padding-left: 50px;
  padding-right: 50px;
}

.address {
  color: var(--black);
  text-align: center;
}

.tel {
  font-size: 1.5rem;
  text-align: center;
  margin: 0 0 1.5rem 0;
}

.tel a {
  color: var(--red);
}

.tel a:hover {
  color: var(--green);
}

.contactMe-section p {
    color: var(--black);
    margin: auto;
    max-width: 100vh;
} 

.contact-form {
  background: var(--black);
  border-radius: var(--radius);
  text-align: center;
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  margin-bottom: 2rem;
  max-width: 600px;
  margin: auto;
}

.contact-form:hover {
  box-shadow: var(--dark-shadow);
}

.form-group {
  padding: 1rem 1.5rem 0rem;
  /* margin: 0 2rem; */
}


.form-control {
  /* display: block; */
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--red);
  margin-bottom: 1.25rem;
  /* margin-left: -1.05rem; */
  margin-left: -17px;
  background: white;
  border-radius: var(--radius);
  /* letter-spacing: var(--spacing); */
}

.form-control::placeholder {
  color: var(--black);
  text-transform: uppercase;
}

.submit-btn {
  display: block;
  width: 100%;
  padding: 1rem;
  background: var(--green);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  cursor: pointer;
  text-transform: uppercase;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  font-weight: 700;
  font-size: 0.875rem;
  color: var(--black);
  border: none;
}

.submit-btn:hover {
  background: var(--blue);
}




`