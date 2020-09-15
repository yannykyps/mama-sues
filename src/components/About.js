import React from 'react'
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const query = graphql`
  {
    allContentfulAbout {
      nodes {
        title
        content {
          content
        }
        image {
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
  <p>{about[0].content.content}</p>

</section>  
        </Wrapper>
    )
}

export default About

const Wrapper = styled.section`

.about-section {  
  margin-top: -5vw;
  background-image: linear-gradient(135deg, #777, #111);
  padding-bottom: 50px;

}
.about-section p {
    color: white;
    /* width: 90vh; */
    margin: auto;
    width: 80%;
} 

header {
  margin-top: 5rem;  
  position: relative;
  height: 300px;
  background: black;
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
  font: 44px "Arial";
  color: white;
  text-align: center;
}

.about-img {
    max-width: 80vh;
    transition: .5s ease;
    position: relative;
    margin: 0 auto;
    margin-bottom: 50px;

}

`

