import { useState } from "react";
import styles from "./form.module.css";
export default function Form ({todos, setTodos}){
  const [todo, setTodo]= useState({name:"", done: true});


    function  handleSubmit(e){
        e.preventDefault();
        setTodos ([...todos, todo]);
        setTodo({name:"", done: false});
     }
    return  (
   <form className={styles.todoform} onSubmit={handleSubmit}>
<div className={styles.Inputcontainer}>
    <input 
    className={styles.todoInput}
    onChange={(e)=> setTodo({name:e.target.value, done: false})}
     value={todo.name}
      type="text" 
      placeholder= "enter task here"
      />
    <button className={styles.todoButton} type="submit">add</button>
    
    </div>
  </form>);

}  