import React from 'react'
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import styled, { keyframes } from "styled-components"

const query = graphql`
{
  file(relativePath: {eq: "bcg-img.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Background = ({children}) => {
    const {file: {
        childImageSharp: {fluid},
      },
    } = useStaticQuery(query);
    return (<Wrapper>
    <BackgroundImage Tag="div" fluid={fluid} className="bcg" preserveStackingContext={true}>
      {children}
    </BackgroundImage>
        </Wrapper>
    )
}

export default Background

const fadeIn = keyframes`
      from{
         background-color:rgb(0,0,0,0.8);
      }
      to{
        background-color:rgba(0,0,0,0.4);
      }
      `

const Wrapper = styled.section`

  .bcg {
    /* MUST!!!!!! */
    min-height: 100vh;
    /* margin-top: 0rem; */
    display: grid;
    place-items: center;
    animation: ${fadeIn} 2s ease-in-out 1 forwards;
    max-width: 1170px; 
    margin: 0 auto;

  }

  .bcg::before {
    opacity: 1;
  }
`