import React from 'react'
import styled from "styled-components"

const Title = ({title}) => {
    return (
        <Wrapper>
            <h1>{title}</h1>
        </Wrapper>
    )
}

export default Title

const Wrapper = styled.header`
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
  
  h1 {
    margin: 0;
    padding-top: 100px;
    padding-bottom: 50px;
    color: white;
    font-family: 'Satisfy', cursive;
    font-weight: 400;
  
  }
  `