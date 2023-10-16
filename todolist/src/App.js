import "./App.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState(0);
  
  let submitTodo = (e) => {
    e.preventDefault();

    if(value) {
      const EditTodo = todos.find((item) =>  value === item.id);
      const updateTodo = todos.map((item) =>  item.id === EditTodo.id?{id:item.id,name: todo}:item);
      setTodos([...updateTodo]);
      setValue(0);
      setTodo("");
      return;
    }

    if(todo !== '') {
      setTodos([{name:todo, id: `${Date.now()}`},...todos]);
    }
    setTodo("");
    
  }

  let handleDelete = (id) => {
    const deleteTodo = todos.filter((item) => { return id !== item.id })
    setTodos([...deleteTodo])
  }

  let handleEdit = (todo) => {
    setValue(todo.id);
    setTodo(todo.name);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo List App</h1>
        <div>
          <form className="todoForm" onSubmit={submitTodo}>
            <input type="text" placeholder="Add todo..." value={todo} onChange={(event)=>setTodo(event.target.value)}/>
            <button type="submit" >{value?"Edit":"Add"}</button>
          </form>
        </div>
        <div>
          <ul className="todoList">
            {todos.map((item) => {
              return (
                <li className="singleTodo" key={item.id}>
                  <span className="todoText">{item.name}</span>
                  <button onClick={() => handleEdit(item)}>Edit</button>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
