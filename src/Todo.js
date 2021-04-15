import React from 'react';
import { Button, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import db from './firebase';
import './Todo.css';

function Todo(props) {

    return (
        <List className="todo__list">
            <ListItem>
            <ListItemAvatar>
            </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Dummy deadline🎅"/>
            </ListItem>
            <Button onClick={event => 
            db.collection('todos').doc(props.todo.id).delete()}>❌DELETE ME</Button>
        </List>
    )
}

export default Todo
