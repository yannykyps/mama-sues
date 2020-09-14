import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

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
        <div>
            {info.map((info) => {
                return (
                <div key={info.id}>
                <h1>{info.title}</h1>
                </div>
                )

            })}
        </div>
    )
}

export default HeroTitle
