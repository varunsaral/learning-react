import React from 'react'
import Todo  from './Todo';
function Todos(props) {
    let mystyle = {
        minHeight:"70vh"
    }
    return (
       
        <div className="container my-3"  style={mystyle}>
            <h3 className="my-3"> Todos List</h3>
            {props.todos.length === 0 ?"No more task available":
            props.todos.map((todo)=>{
               
                return (
                    <>
                    <Todo todo = {todo} key={todo.sno} ondelete = {props.ondelete}/> <hr/>
                    </> 
                )  
            })
        }
        </div>
    ) 
}

export default Todos
