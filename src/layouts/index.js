import React from "react"

import "../styles/global.scss"
import Menu from "../components/Menu"
import { Link } from "gatsby"
import Footer from "../components/Footer"
import Content from "../components/Content"
import Container from "../components/Container"

export default ({ children }) => {
  return (
    <>
      <Menu/>
      <section className="section" style={{ marginTop: "4rem", minHeight: "90vh"}}>{children}</section>
      <Footer>
        <Container>
          <Content>
            <p className="is-size-7 has-text-right-desktop has-text-centered-touch">© {new Date().getFullYear()} Anja Wippler | <Link to={"/impress"}>Impressum</Link> | <Link to={"/datenschutz"}>Datenschutz</Link></p>
          </Content>
        </Container>
      </Footer>
    </>
  )
}
