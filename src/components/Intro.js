import React from 'react'
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const query = graphql`
{
    allContentfulIntro {
      nodes {
        id
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

const Intro = () => {
    const {allContentfulIntro:{nodes:images},} = useStaticQuery(query);
    return (
       <Wrapper>
            
           <section>
           <h3>Our Signature Dishes</h3>
           <section className="section-center">
           
           {images.map((item) => {
               return (<article key={item.id}>
                <h3 className="title">{item.image.title}</h3>
                   <Image fluid={item.image.fluid} className="img"/>
               </article>
               )
           })} 
           </section>  
           </section>
       </Wrapper>
    )
}

export default Intro

const Wrapper = styled.section`
section {
    padding: 4rem 0;
    background: black;
    display: grid;
    text-align: center;
}

.title {
    color: white;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
    z-index: 1;
}


section h3 {
    color: white;
}
.section-center {
    width: 100vw;
    margin: 0 auto;
    max-width: 1170px;
}

.img {
    height: 19rem;
}


@media screen and (min-width: 576px) {
  .img {
    height: 19rem;
  }
  .section-center {
    grid-template-columns: 1fr;
  }
}

@media screen and (min-width: 768px) {
  .img {
    height: 22rem;
  }

  .section-center {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 992px) {
  .section-center {
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }


}
  `