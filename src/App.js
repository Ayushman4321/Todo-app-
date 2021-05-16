import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import db from './Firebase';
import Todo from './Todo';
import firebase from 'firebase'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState([])
  useEffect(() => {
    db.collection('todos')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })))
    })
  }, []);
  

  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }


  return (
    <div className="App">
     <h1>Hello Ashu</h1>
     <form>
     <FormControl>
     <InputLabel>✅ Write your Todo</InputLabel>
      <Input  value={input} onChange={(event) => setInput(event.target.value)} />    
     </FormControl>
     <Button  disabled={!input}  variant='contained' color='primary' onClick={addTodo} type="submit">Add todo</Button>
     </form>
     <ul>
     {      
       todos.map(todo  => (
        <Todo todo={todo}/>
        // <li>{todo}</li>
        ))
      }
     </ul>
    </div>
  );
}

export default App;