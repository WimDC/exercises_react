import "./App.css";
import React from "react";
import { NUMBER_DATA } from "./data/data";
import { Box, Typography } from "@mui/material";
import { NumbersPage } from "./Pages/NumbersPage";
import { Numbers } from "./components/Numbers";

function App() {
  const filteredNumbers = NUMBER_DATA.filter(number => number > 6);
  const doubleNumbers = NUMBER_DATA.map(number => number * 2);

  return (
    <div>
      <div className="App">
        <NumbersPage numbers={NUMBER_DATA} title="alle getallen" />
        <NumbersPage numbers={filteredNumbers} title="getallen>6" />
        <NumbersPage numbers={doubleNumbers} title="numbers*2" />
      </div>
    </div>
  );
}

export default App;
