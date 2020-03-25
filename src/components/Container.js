import PropTypes from "prop-types"
import React from "react"
import classNames from "classnames"

const Container = ({ className, children }) => {
  return (
    <div className={classNames("container", className)}>{children}</div>
  )
}

export default Container

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
