import React from "react"
import Todo, { TodoInterface } from "../todo/todo"
const sampleData: TodoInterface[] = [
  {
    text: "this is a todo to test the functionality of the app",
    id: 2,
  },
  {
    text: "this is a todo ",
    id: 2,
  },
  {
    text: "this is a todo to test the functionality of the app 32 jkljdaslkdjs we are gonna make this so long so you may notice whats up",
    id: 2,
  },
  {
    text: "this is a todo to test the functionality of the app dajsdklasjdkl",
    id: 2,
  },
]
const TodoContainer = () => {
  return (
    <div className="todo-container ">
      {sampleData.map(item => (
        <Todo text={item.text} id={item.id} />
      ))}
    </div>
  )
}

export default TodoContainer
