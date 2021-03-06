import React from 'react'
import Links from "../constants/links"
import SocialLinks from "../constants/SocialLinks"
import { FaTimes } from "react-icons/fa"
import styled from "styled-components"

const Sidebar = ({isOpen, toggleSidebar}) => {
    return (<Wrapper>
        <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
    <button className="close-btn" aria-label="close button" onClick={toggleSidebar}>
      <FaTimes />
    </button>
    <div className="side-container">
      <Links styleClass={`${isOpen ? "sidebar-links" : ""}`} />
      <SocialLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`} /> 
      <div className="tel"><a href="tel:01216884114">0121 688 4114</a></div>
      <div className="address">
      <address>123 Stetchford Road</address>
      <address>Stetchford</address>
      <address>Birmingham</address>
      <address>B34 6BL</address>
      </div>
    </div>
  </aside>
  </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div`
.sidebar {
  /* background: var(--clr-light-shade); */
  background: rgb(208,77,0);
background: linear-gradient(0deg, rgba(208,77,0,1) 0%, rgba(243,175,0,1) 100%);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: grid;
  place-items: center;
  opacity: 0;
  transition: var(--transition);
  transform: translateX(-100%);
}

.address {
  color: var(--black);
  text-align: center;
}

.tel {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
}

.tel a {
  color: var(--blue);
}

.tel a:hover {
  color: var(--pink);
}

.show-sidebar {
  opacity: 1;
  transform: translateX(0);
}

.sidebar-links {
  padding-inline-start: 0px;
}

.sidebar-links li {
  opacity: 1;

}

.sidebar-links li a {
  display: block;
  text-align: center;
  text-transform: capitalize;
  color: var(--black);
  margin-bottom: 1rem;
  font-size: 2rem;
  transition: var(--transition);
  border-radius: var(--radius);
}

.sidebar-links li a:hover {
  color: var(--blue);
}

.close-btn {
  position: absolute;
  right: 1.75%;
  top: 2.75%;
  font-size: 2.5rem;
  background: transparent;
  border-color: transparent;
  color: var(--red);
  cursor: pointer;
  transition: var(--transition);
}

.close-btn:hover {
  color: var(--blue);
}

@media screen and (min-width: 992px) {
  .sidebar {
    transform: translateX(-100%);
  }
}

`