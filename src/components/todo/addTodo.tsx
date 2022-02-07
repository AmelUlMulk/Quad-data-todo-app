import React, { useEffect, useState } from "react"
import { TodoInterface, TodoStatus } from "./todo"
import { useDispatch } from "react-redux"
import { addTodo, updateTodo } from "../../redux/todoReducer"
import Tooltip from "../utils/tooltip"

const AddTodo = (props?: TodoInterface) => {
  const { text: text2, id, status } = props
  const dispatch = useDispatch()
  const [text, setText] = useState<string>(text2 ? text2 : "")

  function formControl(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(text)
    if (text.length <= 0) {
      return
    }
    if (id) {
      dispatch(updateTodo({ text, id, status }))
    } else {
      dispatch(addTodo({ text, id: Math.random(), status: TodoStatus.PENDING }))
    }
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
        placeholder="Enter Todo"
        onChange={e => setText(e.target.value)}
        value={text}
      />
      <Tooltip text={text2 ? "Update" : "Add"}>
        <button className="add" type="submit">
          {text2 ? "ok" : "+"}
        </button>
      </Tooltip>
    </form>
  )
}

export default AddTodo
