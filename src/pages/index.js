import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import MainSection from "../components/MainSection"

const Index = () => (
  <Layout>
    <SEO title="Home" description="Mama Sue's Cook House is a tasty fast food and takeaway restaurant based in Stetchford, Birmingham. "/>
    <Hero />
    <MainSection />
  </Layout>
)

export default Index
