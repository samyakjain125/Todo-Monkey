
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
    console.log("newTodo => \n"+ title +"\n "+desc)
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

  const [mode, setMode] = useState("light");
  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "rgb(33 37 41 / 85%)"
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white"
    }
  }

  return (
    <div >
    <Navbar mode={mode} toggleMode={toggleMode} />
    <AddTodo addTodo={addTodo} mode={mode}/>
    {/* <hr className='container' style={{ "height":"3px", "backgroundColor": "#00000078", "border":"0px","borderRadius":"22px"}}/> */}
    <Todos todos={todos} onDelete={onDelete} mode={mode} />
    {/* Samyak Jain is here! */}

    </div>
  );
}

export default App;
