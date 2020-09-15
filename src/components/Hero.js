import React from "react"
import HeroTitle from "./HeroTitle"
import styled from "styled-components"

import Background from "./Background"
import SocialLinks from "../constants/SocialLinks"

const Hero = () => {
  return (<Wrapper>
  <header className="hero">
  <div className="hero-center">
  <Background>
      <article className="hero-info">
          <HeroTitle />
          <h2>Home Cooked Food At Its Best</h2>
          <SocialLinks styleClass="social"/>
          <a className="order" href="https://www.orderswift.com/" target="_new">Order & Collect</a>
        </article>
    </Background>
    
    </div>
  </header>
  </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
.hero {
    margin-top: -5rem;
    height: 100vh;
    position: relative;
  }

.social {
  margin: auto;

}

.order {
  text-transform: uppercase;
  background: red;
  color: white;
  padding: 0.375rem 0.75rem;
  margin-top: 2rem;
  display: inline-block;
  font-weight: 700;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  font-size: 1.5rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
}


.order:hover {
  background: green;
}

  /* .hero-center {
  height: 100%;
  display: grid;
  align-items: center;
} */
  
  .hero-info {
    margin-top: 5rem;
    text-align: center;
    color: white;
    width: 85vw;
    max-width: 800px;
  } 
  `