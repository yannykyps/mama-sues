import React from 'react'
import styled from "styled-components"
import Title from './Title'

const Order = () => {
    return (
        <Wrapper>
        <Title title="order" />  
        <section className="menu-section">
            <h2>Order info goes here</h2>
            <p>...</p>
        </section>    
        </Wrapper>
    )
}

export default Order

const Wrapper = styled.section`
margin: auto;

.menu-section {  
  /* margin-top: -5vw; */
  background: var(--grey);
  padding-bottom: 50px;
  /* margin-bottom: 20px; */
  text-align: center; 
  padding-left: 50px;
  padding-right: 50px;
  position: relative;
}

.menu-section p {
    color: white;
    /* width: 90vh; */
    margin: 50px auto;
    max-width: 100vh;
} 


.menu-section h2 {
  margin: 0;
  padding-top: 100px;
  padding-bottom: 50px;
  font-family: 'Satisfy', cursive;
  font-weight: 400;

}
`