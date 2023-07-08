import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const Income = () => {
  return (
    <TableContainer sx={{ position: "fixed", bottom: "100px", right: "100px", left: "100px" }}>
      <Table sx={{ maxWidth: "100px"}}>
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
  );
};

export default Income;
