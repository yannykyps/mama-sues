import React from "react"
import HeroTitle from "./HeroTitle"
import styled from "styled-components"

import Background from "./Background"

const Hero = () => {
  return (<Wrapper>
  <header className="hero">
  <Background>
      <article className="hero-info">
          <HeroTitle />
          <h2>Home Cooked Food At Its Best</h2>
        </article>
    </Background>
  </header>
  </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
.hero {
    margin-top: -5rem;
    height: 80vh;
    position: relative;
  }
  
  .hero-info {
    margin-top: 5rem;
    text-align: center;
    color: white;
    width: 85vw;
    max-width: 800px;
  } 
  `