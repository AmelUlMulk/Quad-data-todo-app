import React from "react"
//@ts-ignore
import Trash from "../../images/trash.png"
const Header = () => {
  return (
    <div className="flex-between ">
      <h2 className="main-header">My Todos</h2>
      <img src={Trash} alt="trash" className="icon" />
    </div>
  )
}

export default Header
