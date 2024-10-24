import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Todo from './components/Todo/Todo'
import { useState } from 'react';
import { addTask } from './redux/slice';

function App() {
  const dispatch = useDispatch();
  const [text, settext] = useState("");
  const todos = useSelector((state)=> state.todos.todos)

  const handleAdd = (event) =>{
    event.preventDefault();
    const task = {
      id : todos[todos.length -1].id +1 || 1 , 
      text,
      status: "incompleted"
    }
    dispatch(addTask(task))
  }
  return (
    <>
    <form onSubmit={(event)=>handleAdd(event)} className='add'>
      <input type="text" placeholder='text' onChange={(event)=>settext(event.target.value)} />
      <input type="submit" value="add" />
    </form>
    {todos?.map((element,index)=>{
      return (
        <Todo key={index} todo={element} />
      )
    })}
    </>
  )
}

export default App
