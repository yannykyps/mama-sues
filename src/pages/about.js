import React from 'react'
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import About from '../components/About'

const about = () => {
    return (
        <Layout>
        <SEO title="About" />
        <About />
        <Footer />
        </Layout>
    )
}

export default about