import React, { useState, useContext } from "react";
import { ThemeContext, themes } from "./context/ThemeContext";
import MyClass from "./components/MyClass";

const App = () => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <MyClass changeTheme={toggleTheme} />
    </ThemeContext.Provider>
  );
};

export default App;
