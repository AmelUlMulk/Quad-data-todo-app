import React from "react"

const Tooltip = ({ children, text }) => {
  return (
    <div className="tooltip">
      <div className="tooltiptext">{text}</div>
      {children}
    </div>
  )
}

export default Tooltip
