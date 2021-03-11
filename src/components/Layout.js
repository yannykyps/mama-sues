import React from "react"
import Footer from "./Footer";
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"


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
    <Footer />
    </div>
  )
}

export default Layout