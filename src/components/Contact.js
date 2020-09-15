import React from 'react'
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const query = graphql`
{
    allContentfulImageLinks(sort: {fields: title, order: DESC}) {
      nodes {
        title
        image {
          title
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

const Contact = () => {
    const {allContentfulImageLinks:{nodes:images},} = useStaticQuery(query);
    return (
        <Wrapper>
        {images.map((item, index) => {
            return (<a href={`/${item.title}`} key={index}><article key={index} className="contact">
            <div className="contact-overlay"><h3 className="contact-title">{item.image.title}</h3></div>
             <Image fluid={item.image.fluid} className="contact-img"/>
            </article></a>
            )
        })} 
        </Wrapper>
    )
}


export default Contact

const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;

.contact {
  overflow:hidden;
  position: relative;
}

.contact-title {
    color: white;

}

.contact-img {
    height: 19rem;
    opacity: 0.7;
    transition: .5s ease;
    backface-visibility: hidden;
    
}

.contact-overlay {
  transition: .1s ease;
  position: absolute;
  opacity: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
}

.contact:hover .contact-img { 
  opacity: 0.2;
}

/* .contact:hover .contact-overlay {
  opacity: 1;
} */
@media screen and (min-width: 300px) {
  .contact-img {
    height: 9rem;
    
}

}

@media screen and (min-width: 768px) {
  .contact-img {
    height: 15rem;
    
}
}

@media screen and (min-width: 992px) {
  .contact-img {
    height: 19rem;
    
}
    
  }
`