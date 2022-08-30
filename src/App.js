
import React, {useState, useEffect  } from 'react'
import AddTodo from './Components/AddTodo';
import Navbar from './Components/Navbar';
import Todos from './Components/Todos';

function App() {
  const [todos, setTodos] = useState([
    {
      sno: 0,
      title: "sam",
      desc:"go to temple"
    },
    {
      sno: 1,
      title: "sam",
      desc:"go to temple"
    },
    {
      sno: 2,
      title: "sam",
      desc:"go to temple"
    },
    {
      sno: 3,
      title: "sam",
      desc:"go to temple"
    },
  ]);
  const addTodo = (title, desc) =>{
    console.log("newTodo => "+ title +" and "+desc)
    const newTodo ={
      title: title,
      desc: desc
    }
    console.log(newTodo)
    
  }
  const onDelete=(todo)=>{
    console.log("deleting///")
    console.log(todo)
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
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
