import React from 'react'
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import ContactMe from '../components/ContactMe'

const contact = () => {
    return (
        <Layout>
        <SEO title="Contact" />
        <ContactMe />
        <Footer />
        </Layout>
    )
}

export default contact