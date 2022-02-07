import React, { useEffect, useState } from "react"
import { RootState } from "../../redux/store"
import { useSelector } from "react-redux"
import Todo, { TodoInterface, TodoStatus } from "../todo/todo"
const TodoContainer = () => {
  const data = useSelector((state: RootState) => state.todos)
  const { todos, filter } = data

  return (
    <div className="todo-container ">
      {filter === TodoStatus.All
        ? todos.map(item => (
            <Todo text={item.text} id={item.id} status={item.status} />
          ))
        : todos
            .filter(todo => todo.status === filter)
            .map(item => (
              <Todo text={item.text} id={item.id} status={item.status} />
            ))}
    </div>
  )
}

export default TodoContainer
