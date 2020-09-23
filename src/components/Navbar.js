import React from 'react'
import logo from "../images/logofinal.svg"
import { HiMenu } from "react-icons/hi"
import Links from "../constants/links"
import styled from "styled-components"

const Navbar = ({toggleSidebar}) => {
    return (<Wrapper>
        <nav className="navbar">
            <div className="nav-center">
            <div className="nav-header">
            <img className="logo" src={logo} alt="logo"/>
                <button className="toggle-btn" onClick={toggleSidebar} aria-label="toggle sidebar">
                <HiMenu />
                </button>
            </div>
            <Links styleClass="nav-links" />
            </div>
        </nav>
        </Wrapper>
    )
}

export default Navbar

const Wrapper = styled.section`
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: rgb(208,77,0);
  background: -moz-linear-gradient(0deg, rgba(208,77,0,1) 0%, rgba(243,175,0,1) 100%);
background: -webkit-linear-gradient(0deg, rgba(208,77,0,1) 0%, rgba(243,175,0,1) 100%);
background: linear-gradient(0deg, rgba(208,77,0,1) 0%, rgba(243,175,0,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#d04d00",endColorstr="#f3af00",GradientType=1);
}

.nav-center {
  width: 95vw;
  /* max-width: 1170px; */
  margin: 0 auto;
}

.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-header img {
  margin-bottom: 0.375rem;
}

.toggle-btn {
  font-size: 2rem;
  position: absolute;
  right: 2.5%;
  top: 30%;
  background: transparent;
  border-color: transparent;
  color: var(--black);
  cursor: pointer;
  transition: var(--transition);
}

.toggle-btn:hover {
  color: var(--blue);
}

.nav-links {
  display: none;
}
@media screen and (min-width: 319px) {
.logo {
  width: 150px;
  margin-top: 0px;
  margin-left: 10px;
}

}
@media screen and (min-width: 768px) {
  .toggle-btn {
    display: none;
  }

  .logo {
  width: 150px;
  margin-top: 0px;
  margin-left: 10px;
}
  .nav-links {
    display: flex;
    justify-content: flex-end;
  }

  .nav-links li {
    margin-right: 2rem;
  }

  .nav-links a {
    text-transform: capitalize;
    color: var(--black);
    font-weight: bold;
    letter-spacing: var(--spacing);
    transition: var(--transition);
    padding: 0.5rem 0;
  }

  .nav-links a:hover {
    color: var(--blue);
    box-shadow: 0px 2px var(--clr-ui-success);
  }

  .nav-center {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
}
`