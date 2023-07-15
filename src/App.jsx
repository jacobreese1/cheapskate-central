import "./App.css";
import Header from "./components/Header";
import Income from "./components/Income";
import Expenses from "./components/Expenses";
import { Box } from "@mui/material";

function App() {
  // create expense table
  // add expense tracking and totals
  // same code as income
  // create net current amount total on the top of page
  // income - expense
  // add better styling to all pages making it more visually pleasing
  // add savings goal tracking feature

  return (
    <div>
      <Header />
      <Box
        sx={{
          display: "flex",
          position: "fixed",
          flexDirection: "row",
          bottom: "100px",
          right: "100px",
          left: "100px",
        }}
      >
        <Income />
        <Expenses />
      </Box>
    </div>
  );
}

export default App;
