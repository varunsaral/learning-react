
import './App.css';
import Header from './MyComponents/Header'
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer'
import React, { useState } from 'react';

function App() {
  const ondelete = (todo)=>{
   setTodos(todos.filter((e)=>{
        return e!==todo;
   }))
  }
  let [todos,setTodos] = useState([{
    sno:1,
    title:"Go to market",
    desc:"Just go to the market"
  },
  {
    sno:2,
    title:"Feed tiger",
    desc:"Cause he's hungry"
  },
  {
    sno:3,
    title:"Pick up mom",
    desc:"she's waiting for me"
  },
])
  return (
    
    <>
    <Header name = "varun"/>
    <Todos todos={todos} ondelete = {ondelete}/>
    
  <Footer/>
   </>
  );
}

export default App;
