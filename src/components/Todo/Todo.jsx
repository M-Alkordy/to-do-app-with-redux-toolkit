import { useDispatch } from 'react-redux'
import './Todo.css'
import { deleteTask, editStatus, editText } from '../../redux/slice'
import { useState } from 'react';
const Todo = ({ todo }) => {
  const [id, setid] = useState(null);
  const [text, settext] = useState(null);
  const dispatch = useDispatch()

  const handelEditStatus = (id) => {
    dispatch(editStatus(id))
  }

  const handelEditText = (event) =>{
    event.preventDefault();
    dispatch(editText({
      id,
      text
    }))
    setid(null)
  }

  const handelDeleteTask = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <div className={`todoCard ${(todo.status == "incompleted") ? "incompleted" : "completed"}`}>
      <h1 style={{display : (id)? "none" : "block"}}>{todo.text}</h1>
      <form style={{display : (id)? "block" : "none"}} onSubmit={(event)=>handelEditText(event)}>
        <input type="text" placeholder='text' onChange={(event) => settext(event.target.value)} defaultValue={todo.text} />
        <input type="submit" value="add" />
      </form>
      <div className="btns">
        <button onClick={()=>{setid(todo.id)}}>edit text</button>
        <button onClick={() => handelEditStatus(todo.id)}>edit status</button>
        <button onClick={() => handelDeleteTask(todo.id)}>delete</button>
      </div>
    </div>
  )
}

export default Todo