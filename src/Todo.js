import { Avatar, Button, Input, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Modal } from '@material-ui/core'
import './Todo.css';
import React, { useState } from 'react'
import db from './Firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
    const useStyles = makeStyles((theme)  =>({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing[2,4,3],
        },
    }))

function Todo(props) {
    const classes = useStyles();
    const [open,setOpen] = useState(false);
    const [input, setInput] = useState();

    const handleOpen =() =>{
        setOpen(true);
    };

    const handleClose =() =>{
        setOpen(false);
    };

    const updateTodo =() =>{

        db.collection('todos').doc(props.todo.id).set({
           todo: input
        }, {merge:true})
        setOpen(false);
    };
    return (
        <>
        <Modal
        open ={open}
        onClose={event =>setOpen(false)}>
        <div className={classes.paper}>
        <h2>EDIT TODO</h2>
        <input placeholder={props.todo.todo} value={input} onChange={(event) => setInput(event.target.value)}></input>  
        <Button onClick = {updateTodo}>Update Todo</Button>
        </div>
        </Modal>
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>      
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="DeadLine🙂"/>
             </ListItem>
             <button onClick ={event => setOpen(true)}>Edit</button>
             <DeleteForeverIcon onClick={event =>{db.collection('todos').doc(props.todo.id).delete()}}/>
         </List>
         </>
    )
}

export default Todo
