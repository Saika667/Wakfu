import DailyHunter from "./components/daily-hunter/DailyHunter";
import { ThemeProvider } from "styled-components";
import React, { useState } from 'react';
import colors from './utils/colors';

function App() {
  let storage = localStorage.getItem('dailyHunter');
  storage = JSON.parse(storage);
  const [currentTheme, setTheme] = useState(storage === null ? 'light' : storage.theme);
  let themeColor;

  if (currentTheme === "dark") {
    themeColor = colors.darkMode;
  } else if (currentTheme === "light") {
    themeColor = colors.lightMode;
  } else if (currentTheme === "saika") {
    themeColor = colors.saikaMode
  }

  return (
    <ThemeProvider theme={themeColor}>
      <div className="font-montserrat">
        <DailyHunter setTheme={setTheme} currentTheme={currentTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
