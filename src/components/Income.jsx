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
} from "@mui/material";
import Input from "@mui/joy/Input";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React, { useState, useEffect } from "react";

const Income = () => {
  const [input, setInput] = useState();
  const [incomeArray, setIncomeArray] = useState([]);
  const [total, setTotal] = useState();

  const handleInput = (event) => {
    const { value, name } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const deleteItem = (input) => {
    // for (let i = 0; i < incomeArray.length; i++) {
    // console.log(input.id);
    const newArray = incomeArray.filter((current) => current.id !== input.id);
    setIncomeArray(newArray);
  };

  let arrayId = Math.random();

  const submitInput = () => {
    const { source, amount } = input;
    setIncomeArray([
      ...incomeArray,
      { key: arrayId, id: arrayId++, source, amount },
    ]);
  };

  useEffect(() => {
    const initialValue = 0;
    const sumWithInitial = incomeArray.reduce(
      (accumulator, currentValue) => accumulator + +currentValue.amount,
      initialValue
    );
    setTotal(sumWithInitial);
  }, [incomeArray]);

  return (
    <Box
      sx={{
        maxWidth: "50%",
        flexBasis: "50%",
        display: "flex",
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
            {incomeArray.map((inputs) => (
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
      <form sx={{ display: "flex" }}>
        <Input
          variant="soft"
          name="source"
          type="text"
          onChange={handleInput}
          placeholder="Source"
        />
        <Input
          name="amount"
          variant="outlined"
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

export default Income;
