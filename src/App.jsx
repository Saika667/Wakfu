import DailyHunter from "./components/daily-hunter/DailyHunter";
import { ThemeProvider } from "styled-components";
import React from 'react';
import colors from './utils/colors';
import { useSelector } from "react-redux";

function App() {
  let themeColor;
  const theme = useSelector(state => state.theme.color);
  
  if (theme === "dark") {
    themeColor = colors.darkMode;
  } else if (theme === "light") {
    themeColor = colors.lightMode;
  } else if (theme === "saika") {
    themeColor = colors.saikaMode
  }

  return (
    <ThemeProvider theme={themeColor}>
      <div className="font-montserrat">
        <DailyHunter />
      </div>
    </ThemeProvider>
  );
}

export default App;
