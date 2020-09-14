import React from "react"
import LayoutCom from "../components/LayoutCom"
import SEOCom from "../components/SEOCom"

const NotFoundPage = () => (
  <LayoutCom>
    <SEOCom title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </LayoutCom>
)

export default NotFoundPage
