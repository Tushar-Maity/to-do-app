import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState(['abc', 'def']);
  const [input, setInput] = useState('');

  //when the app loads, we meed to listen to the databse and fetch new todos as they get added/removed
  useEffect(() => {
    //this code here... fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo:  doc.data().todo})))
    })
  }, []);



  const addTodo = (event) => {
    //this will fire off when we click button
    event.preventDefault();//this is really important to stop page from auto refreshing or preventing defaults


    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input])
    setInput(''); //clearing off the input after firing off
  }
  



  return (
    <div className="App">
       <h1>Hello Developers 🚀🚀!</h1>
       <form>
       {/*<input />*/}


       <FormControl>
         <InputLabel>👉👉Write a Todo</InputLabel>
         <Input value={input} onChange={event => setInput(event.target.value)}/>
       </FormControl>
       <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
        Add ToDo
       </Button>
       </form>
       

       <ul>
       {todos.map(todo => (
         <Todo todo={todo}/>
         //<li>{todo}</li>
       ))}
       </ul>
    </div>
  );
}

export default App;
