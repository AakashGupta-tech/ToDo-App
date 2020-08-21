import React, { useState, Fragment } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Button,
  Modal,
} from "@material-ui/core";
import db from "./firebase";
import "./App";

function Todo(props) {
  return (
    <>
      <List className="todo_list">
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText
            primary={props.todo.todo}
            secondary="Dummy Deadline"
          ></ListItemText>
        </ListItem>

        <Button
          onClick={(event) =>
            db.collection("todos").doc(props.todo.id).delete()
          }
          variant="contained"
          color="secondary"
        >
          DELETE ME!
        </Button>
      </List>
    </>
  );
}

export default Todo;
