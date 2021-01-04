import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from "./navigation"

const Layout = ({ children }) => {
  return (
    <div style={{ margin: '3rem auto', maxWidth: 650, padding: '0 1rem' }}>
      <Navigation />
      {children}
    </div>
  )
}

export default Layout
