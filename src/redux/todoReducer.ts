import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TodoInterface, TodoStatus } from "../components/todo/todo"

export interface Todos {
  todos?: TodoInterface[]
}
export interface UpdateTodo {
  text: string
  id: number
  status?: TodoStatus
}
const initialState: Todos = {
  todos: [],
}
interface Id {
  id: number
}
export const AddTodoSlice = createSlice({
  name: "addTodo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoInterface>) => {
      state.todos = [action.payload, ...state.todos]
    },
    removeTodo: (state, action: PayloadAction<Id>) => {
      state.todos = state.todos.filter(item => item.id !== action.payload.id)
    },
    updateTodo: (state, action: PayloadAction<UpdateTodo>) => {
      state.todos = state.todos.map(item =>
        item.id === action.payload.id
          ? {
              text: action.payload.text,
              id: item.id,
              status: action.payload.status,
            }
          : item
      )
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, updateTodo } = AddTodoSlice.actions

export default AddTodoSlice.reducer
