import React from "react"
import { useDispatch } from "react-redux"
import { updateTodo, UpdateTodo } from "../../redux/todoReducer"
import { TodoStatus } from "../todo/todo"

const UpdateTodos = (props: UpdateTodo) => {
  const { status, ...rest } = props
  const dispatch = useDispatch()
  return (
    <img
      src="./static/check.png"
      alt="trash2"
      className="icon"
      onClick={() =>
        dispatch(updateTodo({ ...rest, status: TodoStatus.COMPLETED }))
      }
    />
  )
}

export default UpdateTodos
