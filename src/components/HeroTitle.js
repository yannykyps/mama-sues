import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const query = graphql`
{
    allContentfulInfo {
      nodes {
        content {
          content
        }
        title
        id
      }
    }
  }
`

const HeroTitle = () => {
    const {allContentfulInfo:{nodes:info},} = useStaticQuery(query);
    return (
        <Wrapper>
            {info.map((info) => {
                return (
                <div key={info.id}>
                <h1 className="info-title">{info.title}</h1>
                </div>
                )

            })}
        </Wrapper>
    )
}

export default HeroTitle

const Wrapper = styled.div`

.info-title {
  text-transform: uppercase;
}

@media screen and (min-width: 374px) {
    .info-title {
      font-size: 2rem;

}
  }
  @media screen and (min-width: 768px) {
    .info-title {
      font-size: 2.75rem;
}
  }
`

