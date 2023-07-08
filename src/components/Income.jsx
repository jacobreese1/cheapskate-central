import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";

const Income = () => {
  const [input, setInput] = useState();
  //create input for table to input values - source and amount
  //input those values into an array that can be saved into a database
  //display values from array in the table

  //  const inputHandler = (event) => {
  //     return (  );
  //  }

  const handleInput = (event) => {
    const { value, name } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

    console.log(input)
    
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "100px",
        right: "100px",
        left: "100px",
      }}
    >
      <TableContainer>
        <Table sx={{ maxWidth: "100px" }}>
          <TableHead>
            <TableRow>
              <TableCell>Source</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Authentic</TableCell>
              <TableCell>$1000</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ maxWidth: "100%" }}>
        <TextField
          name="source"
          onChange={handleInput}
          placeholder="Source"
        ></TextField>
        <TextField
          name="amount"
          onChange={handleInput}
          placeholder="Amount"
        ></TextField>
      </Box>
    </Box>
  );
};

export default Income;
