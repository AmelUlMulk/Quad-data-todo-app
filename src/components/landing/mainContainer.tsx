import React from "react"
import AddTodo from "../todo/addTodo"
import Header from "./header"
import TodoContainer from "./todoContainer"
const MainContainer = () => {
  return (
    <div className="content">
      <Header />
      <TodoContainer />
      <AddTodo />
    </div>
  )
}

export default MainContainer
