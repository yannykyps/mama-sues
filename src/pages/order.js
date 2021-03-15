import React from 'react'
import Layout from '../components/Layout'
import Order from '../components/Order'
import SEO from '../components/SEO'

const order = () => {
    return (
        <Layout >
        <SEO title="Order" />
        <Order />   
        </Layout>
    )
}

export default order
