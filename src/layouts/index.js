import React from "react"

import "../styles/global.scss"
import Menu from "../components/Menu"
import { Link } from "gatsby"
import Footer from "../components/Footer"
import Container from "../components/Container"

export default ({ children }) => {
  return (
    <>
      <Menu/>
      <section className="section" style={{ marginTop: "4rem", minHeight: "90vh" }}>{children}</section>
      <Footer>
        <Container>
          <div className="level is-mobile">
            <div className="level-left">
              <div className="level-item">
                <p className="is-size-7">© {new Date().getFullYear()} Anja Wippler</p>
              </div>
            </div>
            <div className="level-right">
              <div className="level-item">
                <p className="is-size-7"><Link to={"/impressum"}>Impressum</Link> | <Link
                  to={"/datenschutz"}>Datenschutz</Link>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Footer>
    </>
  )
}
