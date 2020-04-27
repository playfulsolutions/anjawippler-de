import React from "react"
import { Link } from "gatsby"
import classNames from "classnames"

class Menu extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      menuActive: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      ...prevState,
      menuActive: !prevState.menuActive,
    }))
  }

  closeMenu = () => {
    this.setState((prevState) => ({
      ...prevState,
      menuActive: false,
    }))
  }

  render() {
    return (
      <nav className="navbar is-fixed-top is-white">
        <div className="container">
          <div className="navbar-brand">
            <Link to={"/"} className="navbar-item is-secondary-link">
              <div>
                <h1 className="title is-5">Anja Wippler</h1>
                <h2 className="subtitle">Design & Illustration</h2>
              </div>
            </Link>
            <span className={classNames("navbar-burger burger", { "is-active": this.state.menuActive })}
                  data-target="navbarMenu" onClick={this.toggleMenu} onKeyPress={this.toggleMenu} role="button"
                  tabIndex={0}>
                  <span/>
                  <span/>
                  <span/>
                </span>
          </div>
          <div id="navbarMenu" className={classNames("navbar-menu", { "is-active": this.state.menuActive }, "is-size-5-mobile")}>
            <div className="navbar-end">
              <Link to={"/"} className="navbar-item" activeClassName={"is-active"} onClick={this.closeMenu}>
                Projekte
              </Link>
              <Link to={"/ueber-mich"} className="navbar-item" activeClassName={"is-active"} onClick={this.closeMenu}>
                Über mich
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Menu
