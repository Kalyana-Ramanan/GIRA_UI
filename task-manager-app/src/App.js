import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";
import Task from "./components/Task";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(2),
  },
  formInput: {
    margin: theme.spacing(1),
    width: "100%",
  },
  formButton: {
    margin: theme.spacing(1),
  },
}));

function JiraTrelloApp() {
  const classes = useStyles();
  const [Id, setID] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a task object with the form data
    const task = [{
      Id,
      name,
      description,
      deadline,
      component: "React App", // Set the task component
    }];

    setData(task);

    // Send a POST request to the Jira/Trello API to create the task
    // axios.post("http://api.jira.com/tasks", task).then((response) => {
    //   setData(response.data);
    //   console.log('res',response.data);
    // });
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("https://api.jira.com/tasks");
  //       console.log(response)
  //       setData(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
    <form className={classes.formContainer} onSubmit={handleSubmit}>
    <TextField
        className={classes.formInput}
        label="ID"
        value={Id}
        onChange={(e) => setID(e.target.value)}
      />
      <TextField
        className={classes.formInput}
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        className={classes.formInput}
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        className={classes.formInput}
        label="Deadline"
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button
        className={classes.formButton}
        variant="contained"
        color="primary"
        type="submit"
      >
        Create Task
      </Button>
    </form>

    <Task data = {data}/>
    </div>
  );
}

export default JiraTrelloApp;