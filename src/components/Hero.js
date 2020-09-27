import React, { useContext } from "react"
import HeroTitle from "./HeroTitle"
import styled from "styled-components"
import { GatsbyContext } from "../context/context"

import Background from "./Background"
import SocialLinks from "../constants/SocialLinks"

const Hero = () => {
  const {isOpen} = useContext(GatsbyContext);
  
  return (<Wrapper>
  <header className="hero">
  <div className="hero-center">
  <Background>
      <article className="hero-info">
          <HeroTitle />
          <div className="tel"><a href="tel:01216884114">0121 688 4114</a></div>
          <h3>We are <span className={isOpen}>{isOpen}</span></h3>
          {isOpen === "open" ? <a className={`order ${isOpen}-button`} href="https://www.orderswift.com/" target="_new">Order Now</a>:
          <a className={`order ${isOpen}-button`} href="https://www.orderswift.com/" target="_new">Pre-Order</a>}
          <SocialLinks styleClass="social"/>
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
  margin-top: 2rem;
  color: var(--white);

}

.open {
  color: var(--green)
}

.closed {
  color: var(--red)
}

.open-button {
  background: var(--green)
}

.closed-button {
  background: var(--red)
}

.order {
  text-transform: uppercase;
  /* background: var(--red); */
  color: white;
  display: inline-block;
   -webkit-transition: var(--transition);
  /* transition: var(--transition); */
  transition: var(--transition);
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
}


.closed-button:hover{
  background: var(--redrgba);
  /* transform: translateY(-3px); */
  
}

.open-button:hover{
  background: var(--greenrgba);
  /* transform: translateY(-3px); */
  
}

.tel {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 2rem;
}

.tel a {
  color: white;
}

.tel a:hover {
  color: var(--red);
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
  @media screen and (min-width: 374px) {
    .order {
  padding: 0.275rem 0.55rem;
  margin-top: 1.5rem;
  font-weight: 700;
  font-size: 1rem;
  border: 1px solid transparent;
}
.tel {
  font-size: 1.75rem;
}
  }
  @media screen and (min-width: 768px) {
    .order {
  padding: 0.375rem 0.75rem;
  margin-top: 2rem;
  font-weight: 700;
  font-size: 1.5rem;
  border: 2px solid transparent;
}

.tel {
  font-size: 2rem;
}

  }
  `