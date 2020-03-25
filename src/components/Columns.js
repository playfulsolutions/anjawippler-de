import PropTypes from "prop-types"
import React from "react"
import classNames from "classnames"

const Columns = ({ children, gapSize, className }) => {
  return (
    <div className={classNames("columns", gapSize ? "is-variable " + gapSize : "", className)}>{children}</div>
  )
}

export default Columns

Columns.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  gapSize: PropTypes.oneOf([
    "is-0",
    "is-1",
    "is-2",
    "is-3",
    "is-4",
    "is-5",
    "is-6",
    "is-7",
    "is-8",
  ]),
}
