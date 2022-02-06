import React from "react"
import AddTodo from "./addTodo"
import { TodoInterface } from "./todo"

export interface TodoModal extends TodoInterface {
  edit: boolean
  show: boolean
  close?: Function
}

const TodoDetails = (props: TodoModal) => {
  const { edit, text, show, close, id } = props

  return (
    <div className={`todo-modal ${show ? "flex" : "hidden"}`}>
      <div className="modal-content">
        <p id="modal-close" onClick={() => close(false, false)}>
          X
        </p>
        {!edit ? <p>{text}</p> : <AddTodo text={text} id={id} />}
        <div className="flex">
          <img src="./icon/trash.png" alt="trash2" className="icon" />
          <img src="./icon/check.png" alt="trash2" className="icon" />
        </div>
      </div>
    </div>
  )
}

export default TodoDetails
