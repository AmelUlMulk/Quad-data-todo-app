import React, { useState } from "react"
import { useDispatch } from "react-redux"

//@ts-ignore
import Trash from "../../images/trash.png"
import { removeAll, updateStatus } from "../../redux/todoReducer"
import { TodoStatus } from "../todo/todo"
import Tooltip from "../utils/tooltip"
const Header = () => {
  const dispatch = useDispatch()
  const [active, setActive] = useState<TodoStatus>(TodoStatus.All)
  return (
    <div className="flex-between ">
      <h2 className="main-header">My Todos</h2>
      <div className="nav">
        <a
          href="#!"
          onClick={() => {
            setActive(TodoStatus.COMPLETED)
            dispatch(updateStatus(TodoStatus.COMPLETED))
          }}
          className={active === TodoStatus.COMPLETED ? "active" : ""}
        >
          Completed
        </a>
        <a
          href="#!"
          onClick={() => {
            setActive(TodoStatus.PENDING)
            dispatch(updateStatus(TodoStatus.PENDING))
          }}
          className={active === TodoStatus.PENDING ? "active" : ""}
        >
          Pending
        </a>
        <a
          href="#!"
          onClick={() => {
            setActive(TodoStatus.All)
            dispatch(updateStatus(TodoStatus.All))
          }}
          className={active === TodoStatus.All ? "active" : ""}
        >
          All{" "}
        </a>
      </div>
      <Tooltip text="delete all">
        <img
          src={Trash}
          alt="trash"
          className="icon"
          onClick={() => dispatch(removeAll())}
        />
      </Tooltip>
    </div>
  )
}

export default Header
