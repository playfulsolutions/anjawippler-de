import PropTypes from "prop-types"
import React from "react"
import classNames from "classnames"

const Column = ({ children, size, className }) => {
  return (
    <div className={classNames("column", size, className)}>{children}</div>
  )
}

export default Column

Column.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf([
    "is-1",
    "is-2",
    "is-3",
    "is-4",
    "is-5",
    "is-6",
    "is-7",
    "is-8",
    "is-9",
    "is-10",
    "is-11",
    "is-12",
    "is-three-quarters",
    "is-two-thirds",
    "is-half",
    "is-one-third",
    "is-one-quarter",
    "is-full",
    "is-four-fifths",
    "is-three-fifths",
    "is-three-fifths-tablet",
    "is-two-fifths",
    "is-one-fifth",
  ]),
}
