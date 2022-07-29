import React,{useState} from 'react'
import TodoList from './TodoList'
function App() {
  const [task, setTask] = useState("")
  const [todos,setTodos]= useState([])

  const changeHandler = e => {
    setTask(e.target.value)
  }

  const submitHandler = e =>{
    e.preventDefault();
    const newTodos = [...todos,task]
    setTodos(newTodos)
    setTask("");
  }

  const deleteHandler = (indexValue) =>{
    const newTodos = todos.filter(
      (todo,index) => index !== indexValue
    )
    setTodos(newTodos);
  }

  return (
    <center>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Todo Management Application</h5>
        <form onSubmit={submitHandler}>
          <input type="text" value={task} onChange={changeHandler} name="tast"/> &nbsp;
          <input type="submit"  value="add" name="add"/>
        </form>
        <TodoList todolist={todos} deleteHandler={deleteHandler}></TodoList>
      </div>
    </div>
    </center>
  )
}

export default App;
