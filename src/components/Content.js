import PropTypes from "prop-types"
import React from "react"
import classNames from "classnames"

const Content = ({ className, children }) => {
  return (
    <div className={classNames("content", className)}>{children}</div>
  )
}

export default Content

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}
