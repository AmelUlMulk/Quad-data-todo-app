import React, { useEffect } from "react"
import { RootState } from "../../redux/store"
import { useSelector } from "react-redux"
import Todo from "../todo/todo"
const TodoContainer = () => {
  const todos = useSelector((state: RootState) => state.todos.todos)
  useEffect(() => {}, [todos])
  return (
    <div className="todo-container ">
      {todos.map(item => (
        <Todo text={item.text} id={item.id} status={item.status} />
      ))}
    </div>
  )
}

export default TodoContainer
