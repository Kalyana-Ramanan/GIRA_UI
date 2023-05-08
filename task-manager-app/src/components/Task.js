import React, { useEffect, useState } from "react";


import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

const Task=(props)=> {
  
       const [get, setGet] = useState([]);
      
       useEffect(() => {
              setGet(props.data)
            }, [props]);


  return (
    <div>
        <TableContainer component={Paper} >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {get?.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.Id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.deadline}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  


    </div>
  )
}

export default Task