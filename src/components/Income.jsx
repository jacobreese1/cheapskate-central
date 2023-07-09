import {
  Box,
  Button,
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
  const [incomeArray, setIncomeArray] = useState([]);

    //add total box to table showing the total of all the income amounts
    //add delete button to get rid of income inputs

  const handleInput = (event) => {
    const { value, name } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  let arrayId = 0;

  const submitInput = () => {
    const { source, amount } = input;
    setIncomeArray([...incomeArray, { id: arrayId++, source, amount }]);
  };

  useEffect(() => {
    console.log(incomeArray);
  }, [incomeArray]);

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
            {incomeArray.map((inputs) => (
              <TableRow>
                <TableCell key={inputs.id}>{inputs.source}</TableCell>
                <TableCell key={inputs.id}>{inputs.amount}</TableCell>
              </TableRow>
            ))}
            {/* <TableCell>Authentic</TableCell>
              <TableCell>$1000</TableCell> */}
          </TableBody>
        </Table>
      </TableContainer>
      <form>
        <TextField name="source" onChange={handleInput} placeholder="Source" />
        <TextField name="amount" onChange={handleInput} placeholder="Amount" />
        <Button variant="contained" onClick={submitInput}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Income;
