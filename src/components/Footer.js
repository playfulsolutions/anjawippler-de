import PropTypes from "prop-types"
import React from "react"

const Footer = ({ children }) => {
  return (
    <footer className="footer">{children}</footer>
  )
}

export default Footer

Footer.propTypes = {
  children: PropTypes.node,
}
