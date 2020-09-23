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
    height: 300px;
    text-align: center;
    background: var(--back-primary);

  

  h1 {
    margin: 0;
    padding: 100px 0;
    /* padding-bottom: 50px; */
    text-align: center;
    font-family: 'Satisfy', cursive;
    font-weight: 400;
    
  }

  header h1 {
    position: relative;
    color: var(--blue);
    margin: 0;
    padding: 100px 0;
    /* padding-bottom: 50px; */
    text-align: center;
    font-family: 'Satisfy', cursive;
    font-weight: 400;
  }
  `