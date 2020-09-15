import React from 'react'
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const query = graphql`
{
    contentfulSpecial {
      content
      image {
        title
        fluid(quality: 100) {
            ...GatsbyContentfulFluid
        }
      }
    }
  }
`

const Special = () => {
    const {contentfulSpecial} = useStaticQuery(query);
    return (
        <Wrapper>
            <h2 className="special-title">{contentfulSpecial.image.title}</h2>
            <h3 className="content">{contentfulSpecial.content}</h3>
            <Image fluid={contentfulSpecial.image.fluid} className="special-img" />
            <a className="order" href="https://www.orderswift.com/" target="_new">Order Now</a>
        </Wrapper>
    )
}

export default Special

const Wrapper = styled.div`
/* padding: 0rem; */
.special-img {
    height: 38rem;
    opacity: 0.7;  
}
.content {
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    z-index: 1;
    margin-top: 0;
    line-height: 4rem;
    letter-spacing: var(--spacing);
    width: 80%;
}
.special-title {
    color: white;
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    z-index: 1;
    margin-top: 0;

}

.order {
  text-transform: uppercase;
  position: absolute;
  top: 80%;
  left: 50%;
  background: red;
  color: white;
  padding: 0.375rem 0.75rem;
  margin-top: 2rem;
  display: inline-block;
  font-weight: 700;
  transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  transition: var(--transition);
  font-size: 1.5rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
}


.order:hover {
  background: green;
}
`