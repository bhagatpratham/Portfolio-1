import React from "react"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import "../styles/index.scss"
import * as LayoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={LayoutStyles.container}>
      <div className={LayoutStyles.content}>
        <Navigation />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
