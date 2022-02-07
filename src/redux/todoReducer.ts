import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TodoInterface, TodoStatus } from "../components/todo/todo"

export interface Todos {
  todos?: TodoInterface[]
  filter: TodoStatus
}
export interface UpdateTodo {
  text: string
  id: number
  status?: TodoStatus
}
const initialState: Todos = {
  todos: [],
  filter: TodoStatus.All,
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
    removeAll: state => {
      state.todos = []
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
    updateStatus: (state, action: PayloadAction<TodoStatus>) => {
      state.filter = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, updateTodo, removeAll, updateStatus } =
  AddTodoSlice.actions

export default AddTodoSlice.reducer
