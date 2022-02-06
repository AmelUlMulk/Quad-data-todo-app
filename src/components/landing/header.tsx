import React from "react"

const Header = () => {
  return (
    <div className="flex-between ">
      <h2 className="main-header">My Todos</h2>
      <img src="./static/trash.png" alt="trash" className="icon" />
    </div>
  )
}

export default Header
