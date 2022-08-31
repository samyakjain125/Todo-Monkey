
import React, {useState, useEffect  } from 'react'
import AddTodo from './Components/AddTodo';
import Navbar from './Components/Navbar';
import Todos from './Components/Todos';

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = []
  }
  else{
    initTodo= JSON.parse(localStorage.getItem("todos"))
  }
  const [todos, setTodos] = useState(initTodo);
  const addTodo = (title, desc) =>{
    console.log("newTodo => "+ title +" and "+desc)
    // console.log(todos.length)
    let sno;
    if(todos.length ===0){
      sno =1
    }
    else{
      sno = todos[todos.length -1].sno +1
    }
    console.log("sno >>> " + sno);
    const newTodo ={
      sno : sno,
      title: title,
      desc: desc
    }
    console.log(newTodo)
    setTodos([...todos, newTodo])
    // localStorage.setItem("todos", JSON.stringify(todos))
    
  }
  const onDelete=(todo)=>{
    console.log("deleting///")
    console.log(todo)
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  // console.log("trytodo")
  // console.log(todos)
  return (
    <div >
    <Navbar/>
    <AddTodo addTodo={addTodo}/>
    {/* <hr className='container'/> */}
    <Todos todos={todos} onDelete={onDelete} />
    {/* Samyak Jain is here! */}

    </div>
  );
}

export default App;
