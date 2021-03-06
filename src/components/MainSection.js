import React from 'react'
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Special from './Special'
import Contact from './Contact'
import chilliRight from "../images/chilli2.png"
import chilliLeft from "../images/chilli3.png"
import { Link } from "gatsby"

const query = graphql`
{
    allContentfulMain {
      nodes {
        id
        image {
          title
          fluid(quality: 64, maxWidth: 1000) {
            ...GatsbyContentfulFluid_withWebp
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
           <section className="main-section">
           <section className="section-center">
           <article className="signature">
           
           <div className="sign-grid">
           <div><img className="chilli-img-left" alt="logo" src={chilliLeft} /></div>
           
           <h2 >
           "From Our Kitchen To Your Plate"
           </h2>
           <div>
           <img className="chilli-img-right" alt="logo" src={chilliRight} />
           </div>
           
           </div>
           
           <h3>We pride ourselves on making tasty dishes</h3>
           <p>Welcome to Mama Sue’s Cook House. A tasty fast food restaurant located in Birmingham. We specialise in a select number of dishes to make sure you get the best takeaway food in Birmingham.</p>
           <p>Our <Link to="/menu/">menu</Link> is a British Indian take on modern classics but with a twist. We specialise in chicken wings, hotdogs, burgers and wraps to name a few. </p>
           <p>Want to try the best chicken wings in Birmingham? then you have to try our selection of tasty chicken wings; all unique with loads of flavour right down to the bone. Prefer boneless wings? We provide the same unique flavours for you to choose from.</p>
           <p>Check out our <Link to="/menu/">menu</Link> today, and see what all the fuss is about. </p>
           </article>
           
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
margin: auto;
/* background: var(--white); */

.main-section {
    padding: 0;
    background: var(--black); 
    display: grid;
    text-align: center;
    position: relative;
    
}

.main {
  overflow:hidden;
  position: relative;
}

.signature {
  padding: 0 2rem;
    background: var(--back-primary); 
    display: grid;
    text-align: center;
    position: relative;
    color: var(--black);
}

.signature h2 {
  font-family: 'Satisfy', cursive;
  font-weight: 400;
  color: var(--blue);
}

.signature h3 {
  color: var(--black)
}
.div-title {
    color: var(--black);
    /* position: absolute;
    top: 60px;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%); */
    /* z-index: 1; */
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
    color: var(--black);
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

.sign-grid {
  display: grid;
  grid-template-columns: 80px 1fr 80px;
}

.chilli-img-left {
  /* float: left; */
  margin-bottom: -40px;
  height: 5rem;
}

.chilli-img-right {
  /* float: right; */
  margin-bottom: -40px;
  height: 5rem;
}

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
    width: 100%;
  }
  .chilli-img-left {
  height: 2rem;
  margin-left: -30px;
}

.chilli-img-right {
  height: 2rem;
  margin-right: -30px;
}

}

@media screen and (min-width: 768px) {
  /* .img {
    height: 22rem;
  } */

  .section-center {
    grid-template-columns: 1fr 1fr;
    padding-top: 0px;
    width: 100%;
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
      .signature {
        grid-area: z;
      }
      .div-contact {
        grid-area: e;
      }
  }
  .chilli-img-left {
  height: 5rem;
}

.chilli-img-right {
  height: 5rem;
}
}

@media screen and (min-width: 992px) {
  .section-center {
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    /* max-width: 1170px; */
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
      .signature {
        grid-area: z;
      }
      .div-contact {
        grid-area: e
      }
  }

  .chilli-img-left {
  height: 5rem;
}

.chilli-img-right {
  height: 5rem;
}

}
  `