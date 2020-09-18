import React from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
// import CookieConsent from 'react-cookie-consent';


const Layout = ({children}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
    <Navbar toggleSidebar={toggleSidebar}/>
    <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>

    {children}
    </div>
  )
}

export default Layout

    /* <CookieConsent
          location="bottom"
          buttonText="I understand"
          declineButtonText="Decline"
          cookieName="gatsby-gdpr-google-analytics">
This site uses cookies to enhance the user experience
</CookieConsent> */