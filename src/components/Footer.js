import React from "react"
import styled from "styled-components"
import SocialLinks from "../constants/SocialLinks"
import { AiOutlineVerticalAlignTop } from "react-icons/ai"


const Footer = () => {
  return (
    <Wrapper>
    <a className="top" href="#top" aria-label="Back to Top"><AiOutlineVerticalAlignTop /></a>
    <div className="contact-info">
    <div>
    <p><strong>Opening Hours</strong></p>
    <p>MON - SUN | 17:00 - 23:00</p>
    </div>
    <div className="footer-address">
      <div className="address">
      <p><strong>Find Us</strong></p>
      <address>123 Stetchford Road</address>
      <address>Stetchford</address>
      <address>Birmingham</address>
      <address>B34 6BL</address>
      </div>
      <div className="tel"><a href="tel:01216884114">0121 688 4114</a></div>
      </div>
      <div className="social-div">
      <p><strong>Social</strong></p>
      <SocialLinks styleClass="social-footer"/>
      </div>
    </div>
      <p>
        &copy; {new Date().getFullYear()} Mama Sue's Cook House. Site by <a href="https://yannyweb.com" target="_new">yannyweb.</a>
      </p>
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  /* height: 10rem; */
  display: grid;
  place-items: center;
  background: rgb(208,77,0);
  background: -moz-linear-gradient(180deg, rgba(208,77,0,1) 0%, rgba(243,175,0,1) 100%);
background: -webkit-linear-gradient(180deg, rgba(208,77,0,1) 0%, rgba(243,175,0,1) 100%);
background: linear-gradient(180deg, rgba(208,77,0,1) 0%, rgba(243,175,0,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#d04d00",endColorstr="#f3af00",GradientType=1);
  text-align: center;
  padding: 1rem;
  /* max-width: 1170px; */
  margin: auto;
  p, .footer-address address {
    color: var(--black);
    margin-bottom: 0;
    @media (max-width: 576px) {
      font-size: 0.75rem;
    }
  }

  .footer-address p {
    margin-bottom: 16px;
  }
  a {
    color: var(--green);
    margin-bottom: 0;
    
    @media (max-width: 576px) {
      font-size: 0.75rem;
    }
  }
  a:hover {
    color: var(--pink);
  }

  .top {
    font-size: 2rem;
    margin: -20px 0 -20px;
    /* z-index: 999; */

  }

  @media screen and (min-width: 300px) {
  .contact-info {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
  }
  .social-footer {
    margin-top: 16px;
    width: 10rem;
  /* margin: auto; */
  }

  .social-div p {
    visibility: hidden;
    margin-top: -16px;
  }
}

  @media screen and (min-width: 768px) {
  .contact-info {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
  }
  .social-footer {
    margin-top: 16px;
    width: 12rem;
    /* color: var(--black); */
  /* margin: auto; */
  }

  .social-div p {
    visibility: visible;
    margin-top: 16px;
  }
}
  
  @media screen and (min-width: 992px) {
  .contact-info {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
  }

}
`
export default Footer
