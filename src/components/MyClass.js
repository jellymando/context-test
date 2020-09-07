import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const MyClass = ({ changeTheme }) => {
  const value = useContext(ThemeContext);
  return (
    <button
      style={{
        color: value.color,
        backgroundColor: value.background,
      }}
      onClick={changeTheme}
    >
      Button
    </button>
  );
};

export default MyClass;
