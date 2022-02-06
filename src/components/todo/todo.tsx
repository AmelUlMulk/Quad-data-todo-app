import React from "react"
import { useState } from "react"
import TodoDetails, { TodoModal } from "./todoDetails"

export interface TodoInterface {
  text: string
  id: number
}

const Todo = (props: TodoInterface) => {
  const { text, id } = props

  const [modalState, setModalState] = useState<TodoModal>({
    show: false,
    edit: false,
    text,
    id,
  })

  function setModal(edit: boolean, show: boolean = true) {
    setModalState({
      text: text,
      show,
      edit,
      id,
    })
  }

  return (
    <div className="todo">
      <div className="flex">
        <img src="./icon/check.png" alt="completed" className="icon" />
        {text.length < 70 ? (
          <p>{text}</p>
        ) : (
          <p onClick={() => setModal(false)}>{`${text.substring(
            0,
            80
          )} ... `}</p>
        )}
      </div>
      <div className="flex">
        <img src="./icon/trash.png" alt="trash2" className="icon" />
        <img
          src="./icon/edit.png"
          alt="trash2"
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
      />
    </div>
  )
}

export default Todo
