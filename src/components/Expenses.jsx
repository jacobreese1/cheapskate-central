import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import Input from "@mui/joy/Input";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React, { useState, useEffect } from "react";
import styles from "./Expenses.module.css";

const Expenses = () => {
  const [input, setInput] = useState();
  const [expenseArray, setExpenseArray] = useState([]);
  const [total, setTotal] = useState();

  const handleInput = (event) => {
    const { value, name } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const deleteItem = (input) => {
    // for (let i = 0; i < expenseArray.length; i++) {
    // console.log(input.id);
    const newArray = expenseArray.filter((current) => current.id !== input.id);
    setExpenseArray(newArray);
  };

  let arrayId = Math.random();

  const submitInput = () => {
    const { source, amount } = input;
    setExpenseArray([
      ...expenseArray,
      { key: arrayId, id: arrayId++, source, amount },
    ]);
  };

  useEffect(() => {
    const initialValue = 0;
    const sumWithInitial = expenseArray.reduce(
      (accumulator, currentValue) => accumulator + +currentValue.amount,
      initialValue
    );
    setTotal(sumWithInitial);
  }, [expenseArray]);

  return (
    <Box
      sx={{
        display: "flex",
        flexBasis: "50%",
        maxWidth: "50%",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <TableContainer sx={{ textAlign: "center" }}>
        <Table sx={{ maxWidth: "100px" }}>
          <TableHead>
            <TableRow>
              <TableCell>Source</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenseArray.map((inputs) => (
              <TableRow>
                <TableCell key={inputs.id}>{inputs.source}</TableCell>
                <TableCell key={inputs.id}>${inputs.amount}</TableCell>
                <DeleteOutlineIcon
                  sx={{ height: "100", my: "25%" }}
                  onClick={() => deleteItem(inputs)}
                ></DeleteOutlineIcon>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter sx={{ fontWeight: "800" }}>
            <TableCell>Total</TableCell>
            <TableCell>${total}</TableCell>
          </TableFooter>
        </Table>
      </TableContainer>
      <form>
        <Input
          name="source"
          type="text"
          onChange={handleInput}
          placeholder="Source"
        />
        <Input
          name="amount"
          type="number"
          onChange={handleInput}
          placeholder="Amount"
        />
        <Button variant="contained" onClick={submitInput}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Expenses;
