import React from "react"
import styled from "styled-components"
const Footer = () => {
  return (
    <Wrapper>
      <p>
        &copy; {new Date().getFullYear()} Mama Sue's Cook House. All rights reserved.
        Site by <a href="https://yannyweb.com" target="_new">yannyweb.</a>
      </p>
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  height: 5rem;
  display: grid;
  place-items: center;
  background: black;
  text-align: center;
  padding: 1rem;
  p {
    color: white;
    margin-bottom: 0;
    @media (max-width: 576px) {
      font-size: 0.75rem;
    }
  }
  a {
    color: red;
    margin-bottom: 0;
    @media (max-width: 576px) {
      font-size: 0.75rem;
    }
  }
  a:hover {
    color: green;
  }
`
export default Footer
