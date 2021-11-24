import React from 'react'
import Todo  from './Todo';
function Todos(props) {
    return (
        <div className="container">
            <h3 className="text-center my-3"> Todos List</h3>
            
            {props.todos.map((todo)=>{
                return <Todo todo = {todo} key={todo.sno} ondelete = {props.ondelete}/>      
            })}
           
        </div>
    )
}

export default Todos
