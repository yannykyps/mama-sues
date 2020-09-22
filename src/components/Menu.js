import React from 'react'
import styled from "styled-components"
import Title from './Title'

const Menu = () => {

    return (
        <Wrapper>
        <Title title="Menu" />
        <section className="menu-section">
            <h1>Menu goes here</h1>
            <p>...</p>
        </section>  
        </Wrapper>
    )
}

export default Menu

const Wrapper = styled.section`
/* max-width: 1170px; */
margin: auto;

.menu-section {  
  margin-top: -5vw;
  background: var(--grey);
  padding-bottom: 50px;
  /* margin-bottom: 20px; */
  text-align: center; 
  padding-left: 50px;
  padding-right: 50px;
}

.menu-section p {
    color: white;
    /* width: 90vh; */
    margin: 50px auto;
    max-width: 100vh;
} 


header {
  margin-top: 5rem;  
  position: relative;
  height: 250px;
  text-align: center;
  background: var(--back-primary);
  clip-path: polygon(
    0 0,
    100% 0,
    100% 100%,
    0 calc(100% - 5vw)
  );
  /* change the calc height to a percentage height to get alternate responsive behavior*/
}

h1 {
  margin: 0;
  padding-top: 100px;
  padding-bottom: 50px;
  color: white;
  font-family: 'Satisfy', cursive;
  font-weight: 400;

}

`

