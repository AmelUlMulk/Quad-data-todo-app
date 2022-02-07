import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import DeleteTodo from "../utils/delete"
import Tooltip from "../utils/tooltip"
import UpdateTodos from "../utils/update"

import AddTodo from "./addTodo"
import { TodoInterface } from "./todo"

export interface TodoModal extends TodoInterface {
  edit: boolean
  show: boolean
  close?: Function
}

const TodoDetails = (props: TodoModal) => {
  const { edit, text, show, close, id } = props

  const todos = useSelector((state: RootState) => state.todos.todos)

  useEffect(() => {
    close(false, false)
  }, [todos])

  return (
    <div className={`todo-modal ${show ? "flex" : "hidden"}`}>
      <div className="modal-content">
        <p id="modal-close" onClick={() => close(false, false)}>
          X
        </p>
        {!edit ? <p>{text}</p> : <AddTodo text={text} id={id} />}
        <div className="flex">
          <Tooltip text="Delete">
            <DeleteTodo id={id} />
          </Tooltip>
          <Tooltip text="update">
            <UpdateTodos text={text} id={id} />
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default TodoDetails
