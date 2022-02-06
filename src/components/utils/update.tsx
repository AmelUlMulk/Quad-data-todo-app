import React from "react"
import { useDispatch } from "react-redux"
import { updateTodo, UpdateTodo } from "../../redux/todoReducer"
import { TodoStatus } from "../todo/todo"
//@ts-ignore
import Update from "../../images/check.png"
const UpdateTodos = (props: UpdateTodo) => {
  const { status, ...rest } = props
  const dispatch = useDispatch()
  return (
    <img
      src={Update}
      alt="check"
      className="icon"
      onClick={() =>
        dispatch(updateTodo({ ...rest, status: TodoStatus.COMPLETED }))
      }
    />
  )
}

export default UpdateTodos
