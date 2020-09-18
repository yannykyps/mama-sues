import React from 'react'
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import logo from "../images/logosquare.svg"


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
         <header>
  <h1>About</h1>
</header>

<section className="about-section">
  <h1>{about[0].title}</h1>
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
max-width: 1170px;
margin: auto;

.about-section {  
  margin-top: -5vw;
  background: var(--grey);
  padding-bottom: 50px;
  margin-bottom: 20px;
  text-align: center; 
  padding-left: 50px;
  padding-right: 50px;
}

.about-section p {
    color: white;
    /* width: 90vh; */
    margin: 50px auto;
    max-width: 100vh;
} 

.about-logo {
    width: 300px;
}

header {
  margin-top: 5rem;  
  position: relative;
  height: 250px;
  text-align: center;
  background: var(--black);
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

.about-img {
    /* max-width: 80vh; */
    transition: .5s ease;
    position: relative;
    margin: 0 auto;
    margin-bottom: 50px;
    max-width: 80vh;

}


`

