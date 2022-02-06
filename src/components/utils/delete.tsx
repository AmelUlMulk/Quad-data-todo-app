import React from "react"
import { useDispatch } from "react-redux"
import { removeTodo } from "../../redux/todoReducer"

const DeleteTodo = ({ id }) => {
  const dispatch = useDispatch()
  return (
    <img
      src="./static/trash.png"
      alt="trash2"
      className="icon"
      onClick={() => dispatch(removeTodo({ id }))}
    />
  )
}

export default DeleteTodo
