import PropTypes from "prop-types"
import React from "react"

const Content = ({ children }) => {
  return (
    <div className={"content"}>{children}</div>
  )
}

export default Content

Content.propTypes = {
  children: PropTypes.node.isRequired,
}
