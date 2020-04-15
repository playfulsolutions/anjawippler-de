import React from "react"

const WebLink = ({ to, children }) => (
  <a href={to} rel="noopener noreferrer" target="_blank" aria-label={"Link zu " + to}>{children}</a>
)

export default WebLink
