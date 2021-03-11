import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ContactMe from '../components/ContactMe'

const contact = () => {
    return (
        <Layout>
        <SEO title="Contact" />
        <ContactMe />
        </Layout>
    )
}

export default contact