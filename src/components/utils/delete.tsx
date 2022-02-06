import React from "react"
import { useDispatch } from "react-redux"
import { removeTodo } from "../../redux/todoReducer"
//@ts-ignore
import Trash from "../../images/trash.png"
const DeleteTodo = ({ id }) => {
  const dispatch = useDispatch()
  return (
    <img
      src={Trash}
      alt="trash2"
      className="icon"
      onClick={() => dispatch(removeTodo({ id }))}
    />
  )
}

export default DeleteTodo
