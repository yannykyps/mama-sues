import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`
const SEO = ({title, description}) => {
  const { pathname } = useLocation();
  const {site} = useStaticQuery(query);
  const {siteDesc, siteTitle, siteUrl, author, image, twitterUsername} = site.siteMetadata
  return <Helmet htlmAttributes={{lang:"en"}} title={`${title} | ${siteTitle}`}>
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:site_name" content="mama sue's cook house" />
    <meta property="og:url" content="https://mamasues.netlify.app/" />
    <meta name="description" property="og:description" content={description || siteDesc} />
    <meta name="image" property="og:image" content={image} />
    <meta name="author" content={author} />
    <link rel="canonical" href={`${siteUrl}${pathname}`} />
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:creator" content={twitterUsername}/>
    <meta name="twitter:title" content={siteTitle}/>
    <meta name="twitter:description" content={siteDesc}/>
    <meta name="twitter:image" content={`${siteUrl}${image}`}/>
    <html lang="en" />
  </Helmet>
}

export default SEO
