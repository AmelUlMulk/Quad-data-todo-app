import React, { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import DeleteTodo from "../utils/delete"
import UpdateTodos from "../utils/update"
import TodoDetails, { TodoModal } from "./todoDetails"
//@ts-ignore
import Edit from "../../images/edit.png"
import Tooltip from "../utils/tooltip"
export enum TodoStatus {
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
  All = "ALL",
}
export interface TodoInterface {
  text?: string
  id?: number
  status?: TodoStatus
}

const Todo = (props: TodoInterface) => {
  const { text, id, status } = props
  const [color, setColor] = useState<string>("blue")
  const data = useSelector((state: RootState) => state.todos)
  const { todos, filter } = data
  useEffect(() => {
    setColor(status === TodoStatus.COMPLETED ? "green" : "red")
    console.log("this is color", color)
  }, [todos, filter])

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
        background: `${color}`,
      }}
    >
      <div className="flex">
        <Tooltip text="Complete">
          <UpdateTodos text={text} id={id} status={status} />
        </Tooltip>
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
        <Tooltip text="delete">
          {" "}
          <DeleteTodo id={id} />
        </Tooltip>
        <Tooltip text="edit">
          <img
            src={Edit}
            alt="edit"
            className="icon"
            onClick={() => setModal(true)}
          />
        </Tooltip>
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
