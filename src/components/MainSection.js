import React from 'react'
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Special from './Special'
import Contact from './Contact'

const query = graphql`
{
    allContentfulMain {
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

const MainSection = () => {
    const {allContentfulMain:{nodes:images},} = useStaticQuery(query);
    return (
       <Wrapper>
           <section>
           <section className="section-center">
           <h2 className="div-title">Signature Dishes</h2>
           {images.map((item, index) => {
               return (<article key={index} className={`main div-${index}`}>
               <div className="overlay"><h3 className="title">{item.image.title}</h3></div>
                   <Image fluid={item.image.fluid} className="img"/>
               </article>
               )
           })} 
           <article className="main div-3"><Special />
           </article>
           
           <article className="div-contact"><Contact /></article>
           </section> 
           
           </section>
       </Wrapper>
    )
}

export default MainSection


const Wrapper = styled.section`
section {
    padding: 0;
    background: black; 
    display: grid;
    text-align: center;
    position: relative;
}

.main {
  overflow:hidden;
  position: relative;
}

.div-title {
    color: white;
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    z-index: 1;
    margin-top: 0;
}

.title {
    color: white;

}

/* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    z-index: 1;
    margin-top: 0; */

section h3 {
    color: white;
}

.img {
    height: 19rem;
    opacity: 0.7;
    transition: .5s ease;
    backface-visibility: hidden;
    
}

.overlay {
  transition: .1s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

/* article:hover, .special-img:hover {
  opacity: 0.2;
} */

.main:hover .img {
  opacity: 0.2;
}

.main:hover .overlay {
  opacity: 1;
}

@media screen and (min-width: 300px) {
  /* .img {
    height: 19rem;
  } */
  .section-center {
    grid-template-columns: 1fr;
    display: grid;
    padding-top: 0px;
    width: 100vw;
  }

}

@media screen and (min-width: 768px) {
  /* .img {
    height: 22rem;
  } */

  .section-center {
    grid-template-columns: 1fr 1fr;
    padding-top: 0px;
    width: 100vw;
    display: grid;
      grid-template-areas:
        "z z"
        "a b"
        "c c"
        "d d"
        "e e";
      .div-0 {
        grid-area: a;
      }
      .div-1 {
        grid-area: b;
      }
      .div-2 {
        grid-area: c;
      }
      .div-3 {
        grid-area: d;
      }
      .div-title {
        grid-area: z;
      }
      .div-contact {
        grid-area: e;
      }
  }
}

@media screen and (min-width: 992px) {
  .section-center {
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    width: 100vw;
    margin: 0 auto;
    max-width: 1170px;
    padding-top: 0px;
    /* display: grid; */
    grid-template-areas:
        "z z z"
        "a b c"
        "d d d"
        "e e e";
      .div-0 {
        grid-area: a;
      }
      .div-1 {
        grid-area: b;
      }
      .div-2 {
        grid-area: c;
      }
      .div-3 {
        grid-area: d;
      }
      .div-title {
        grid-area: z;
      }
      .div-contact {
        grid-area: e
      }
    
  }

}
  `