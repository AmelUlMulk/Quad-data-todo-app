import React, { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import DeleteTodo from "../utils/delete"
import UpdateTodos from "../utils/update"
import TodoDetails, { TodoModal } from "./todoDetails"
//@ts-ignore
import Edit from "../../images/edit.png"
export enum TodoStatus {
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
}
export interface TodoInterface {
  text?: string
  id?: number
  status?: TodoStatus
}

const Todo = (props: TodoInterface) => {
  const { text, id, status } = props
  const [color, setColor] = useState<string>("blue")
  const todos = useSelector((state: RootState) => state.todos.todos)

  useEffect(() => {
    setColor(status === TodoStatus.COMPLETED ? "green" : "blue")
    console.log("this is color", color)
  }, [todos])

  const [modalState, setModalState] = useState<TodoModal>({
    show: false,
    edit: false,
    text,
    id,
    status,
  })

  function setModal(edit: boolean, show: boolean = true) {
    setModalState({
      text: text,
      show,
      edit,
      id,
      status,
    })
  }

  return (
    <div
      className="todo"
      style={{
        border: `1px solid ${color}`,
      }}
    >
      <div className="flex">
        <UpdateTodos text={text} id={id} status={status} />
        {text.length < 50 ? (
          <p>{text}</p>
        ) : (
          <p onClick={() => setModal(false)}>{`${text.substring(
            0,
            50
          )} ... `}</p>
        )}
      </div>
      <div className="flex">
        <DeleteTodo id={id} />
        <img
          src={Edit}
          alt="edit"
          className="icon"
          onClick={() => setModal(true)}
        />
      </div>
      <TodoDetails
        text={text}
        id={id}
        show={modalState.show}
        edit={modalState.edit}
        close={setModal}
        status={status}
      />
    </div>
  )
}

export default Todo
