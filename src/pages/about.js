import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import About from '../components/About'

const about = () => {
    return (
        <Layout>
        <SEO title="About" />
        <About />
        </Layout>
    )
}

export default about