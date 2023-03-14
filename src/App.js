import "./App.css";
import React from "react";
import { CAR_DATA, NUMBER_DATA } from "./data/data";
import { Box, Typography } from "@mui/material";
import { NumbersPage } from "./Pages/NumbersPage";
import { Numbers } from "./components/Numbers";
import { Tab } from "react-tabs";
import { CarsPage } from "./Pages/CarsPage";
import { EventDemo } from "./components/EventDemo";
import { EventsAndStatePage } from "./Pages/EventsAndStatePage";
import { lightGreen } from "@mui/material/colors";

function App() {
  const filteredNumbers = NUMBER_DATA.filter(number => number > 6);
  const doubleNumbers = NUMBER_DATA.map(number => number * 2);

  /*return (
    <div>
      <div className="App">
        <NumbersPage numbers={NUMBER_DATA} title="alle getallen" />
        <NumbersPage numbers={filteredNumbers} title="getallen>6" />
        <NumbersPage numbers={doubleNumbers} title="numbers*2" />
      </div>
    </div>
  );*/

  /*return (
    <div>
      <div className="App">
        <CarsPage cars={CAR_DATA} title="Auto's" />
      </div>
    </div>
  );*/

  return (
    <div>
      <div className="App">
        <EventsAndStatePage title="events" />
      </div>
    </div>
  );
}

export default App;
