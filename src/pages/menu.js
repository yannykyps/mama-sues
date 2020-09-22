import React from 'react'
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import Menu from '../components/Menu'

const menu = () => {
    return (
        <Layout>
        <SEO title="Menu" />
        <Menu />
         <Footer />
        </Layout>
    )
}

export default menu
