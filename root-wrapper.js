import React from "react"
import {GatsbyProvider} from "./src/context/context"
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`

/*  global classes */


:root {
  --transition: all 0.3s linear;
  --radius: 0.25rem;
  --spacing: 0.2rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --red: #d1001f;
  /* --green: #00d14a; */
  --green: #00d14a;
  
  --grey: #6a6a6a;
  --black: #000000;
  --back-primary: #f3af00;
  /* --back-primary: #f4b638; */
  --white: #ffffff;
  --blue: #0087d1;
  --pink: #d10087;

  --greenrgba: rgba(125, 172, 32, 0.5);
  --redrgba: rgba(210, 30, 75, 0.5);
}

body {
  font-family: "Karla", sans-serif;
  margin: 0;
  /* background: var(--white); */
  line-height: 1.5;
}


ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  font-family: "Karla", sans-serif;
  color: var(--blue);
}

a:hover {
  color: var(--red);
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  font-family: "Karla", sans-serif;
}

@media screen and (min-width: 374px) {
  h1 {
    font-size: 2.75rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1rem; 
    /*1.75*/
  }

  h4 {
    font-size: 0.675rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    margin-bottom: 1rem;
  }
}

@media screen and (min-width: 768px) {
  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  h4 {
    font-size: 0.875rem;
  }

  p {
    margin-bottom: 1.25rem;
  }

  a {
    margin-bottom: 1.25rem;
  }
}

`



export const wrapPageElement = ({element}) => {
    return <>
        <GlobalStyle/>
        <GatsbyProvider>{element}</GatsbyProvider>
    </>
}