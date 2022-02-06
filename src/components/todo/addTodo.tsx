import React, { useEffect, useState } from "react"
import { TodoInterface } from "./todo"

interface Add {
  data?: TodoInterface
}

const AddTodo = (props?: TodoInterface) => {
  const { text: text2, id } = props

  const [text, setText] = useState<string>(text2 ? text2 : "")

  function formControl(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(text)
    setText("")
  }

  return (
    <form
      className="todo-add"
      style={{ width: "80%" }}
      onSubmit={e => formControl(e)}
    >
      <input
        type="text"
        className="todo-input"
        onChange={e => setText(e.target.value)}
        value={text}
      />
      <button className="add" type="submit">
        {text2 ? "ok" : "x"}
      </button>
    </form>
  )
}

export default AddTodo
