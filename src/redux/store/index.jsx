import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './../slice/index'
const store = configureStore({reducer : {todos : todoReducer} })

export default store;