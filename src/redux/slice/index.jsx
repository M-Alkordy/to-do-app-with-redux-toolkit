import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { id: 1, text: "create a react app", status: "incompleted" },
        { id: 2, text: "create a redux app", status: "incompleted" },
        { id: 3, text: "create a redux toolkit app", status: "incompleted" }
    ]
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.todos.push(action.payload)
        },
        editStatus: (state, action) => {
            state.todos = state.todos.map(element => {
                if (element.id == action.payload) {
                    if (element.status == "incompleted") {
                        element.status = "completed"
                    } else {
                        element.status = "incompleted"
                    }
                }
                return element
            })
        },
        editText: (state, action) => {
            state.todos = state.todos.map(element => {
                if (element.id == action.payload.id) {
                    element.text = action.payload.text
                }
                return element
            })
        },
        deleteTask: (state, action) => {
            state.todos = state.todos.filter(element =>element.id !=action.payload)
        }
    }
})

export const { addTask , editStatus ,editText, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;