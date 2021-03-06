import React from "react"
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa"
import styled from "styled-components"


const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon" />,
    url: "https://www.facebook.com/",
    aria: "TFacebook"
  },
  {
    id: 2,
    icon: <FaInstagramSquare className="social-icon" />,
    url: "https://www.instagram.com/",
    aria: "LinkedIn"
  },
  {
    id: 3,
    icon: <FaTwitterSquare className="social-icon"/>,
    url: "https://twitter.com/yannykyps",
    aria: "Twitter"
  },

]
const links = data.map(link => {
  return (
    <li key={link.id} href={link.url} className="social-link" aria-label={link.aria}>
      {link.icon}
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <Wrapper>
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.social-links {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  padding-inline-start: 0px;
}

.social-link:hover {
  color: var(--green);
}

.social-link {
  /* color: var(--black); */
  transition: var(--transition);
  font-size: 3rem;
  transition: var(--transition);
  cursor: pointer;
}

@media screen and (min-width: 374px) {
  .social-link {
  font-size: 2rem;
  }
  .social-links {
  width: 10rem;
  margin: auto;
 
}
}

@media screen and (min-width: 768px) {
  .social-link {
  font-size: 3rem;
  }
  .social-links {
  width: 15rem;
}
}
`