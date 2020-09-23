import React from 'react'
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import logo from "../images/logofinal.svg"
import Title from './Title'


const query = graphql`
  {
    allContentfulAbout {
      nodes {
        title
        content1 {
          content1
        }
        content2 {
            content2
          }
          content3 {
            content3
          }
          content4 {
            content4
          }
          content5 {
            content5
          }
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        image2 {
            fluid {
                ...GatsbyContentfulFluid
            }
          }
      }
    }
  }
`

const About = () => {
const {allContentfulAbout:{nodes:about},} = useStaticQuery(query);
    return (
        <Wrapper>
        <Title title="About" />
        <section className="about-section">
          <h2>{about[0].title}</h2>
        <Image fluid={about[0].image.fluid} className="about-img"/>
          <p>{about[0].content1.content1}</p>
        <Image fluid={about[0].image2.fluid} className="about-img" alt="logo"/>
          <p>{about[0].content2.content2}</p>
          <img className="about-logo" alt="logo" src={logo} />
          <p>{about[0].content3.content3}</p>
        </section>  
        </Wrapper>
    )
}

export default About

const Wrapper = styled.section`
/* max-width: 1170px; */
margin: auto;
background: var(--grey);

.about-section {  
  /* margin-top: -5vw; */
  background: var(--grey);
  padding-bottom: 50px;
  /* margin-bottom: 20px; */
  text-align: center; 
  padding-left: 50px;
  padding-right: 50px;
}

.about-section p {
    color: var(--black);
    /* width: 90vh; */
    margin: 50px auto;
    max-width: 100vh;
} 

.about-logo {
    width: 300px;
}

.about-section h2 {
  margin: 0;
  padding-top: 100px;
  padding-bottom: 50px;
  font-family: 'Satisfy', cursive;
  font-weight: 400;

}

.about-img {
    /* max-width: 80vh; */
    transition: .5s ease;
    position: relative;
    margin: 0 auto;
    margin-bottom: 50px;
    max-width: 80vh;

}


`

