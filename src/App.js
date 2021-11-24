
import './App.css';
import Header from './MyComponents/Header'
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer'
import AddTodo from './MyComponents/AddTodo'
import About from './MyComponents/About'
import React, { useState,useEffect } from 'react';

function App() {
  
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo= JSON.parse(localStorage.getItem("todos"));
  }

  const ondelete = (todo)=>{
   setTodos(todos.filter((e)=>{
        return e!==todo;
   }));
   localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo = (title,desc)=>{
    console.log(`I am getting value of ${title} and ${desc}`)

    let sno;
    if(todos.length === 0) {sno=0;}
    else{ sno = todos[todos.length-1].sno+1;}
   const mytodo =  {
     sno:sno,
     title:title,
     desc:desc,
    }
    setTodos([...todos,mytodo]);
  }
  let [todos,setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  return (
    <>
    <Header name = "varun"/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} ondelete = {ondelete}/>
    
  <Footer/>
    </>
  );
}

export default App;
