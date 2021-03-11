import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Menu from '../components/Menu'

const menu = () => {
    return (
        <Layout>
        <SEO title="Menu" />
        <Menu />
        </Layout>
    )
}

export default menu
