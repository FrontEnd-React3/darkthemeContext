// https://www.youtube.com/watch?v=5LrDIWkK_Bc
import FunctionContextComponent from './FunctionContextComponent';
import './App.css';
import React, { useState } from 'react'
export const ThemeContext = React.createContext()

function App() {

  const [darkTheme, setDarkTheme] = useState(true)
  const [redTheme, setRedTheme] = useState(true)
  console.log("darkTheme" + darkTheme)
  console.log("redTheme" + redTheme)
  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
    console.log("darkTheme" + darkTheme)
  }

  function textTheme() {
    setRedTheme(prevRedTheme => !prevRedTheme);
    console.log("redTheme" + redTheme)
  }

  return (
    <div className="App">
    {/* <ThemeContext.Provider value={[darkTheme, redTheme]}> */}
    <ThemeContext.Provider value={{darkTheme, redTheme}}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <button onClick={textTheme}>Text Theme</button>
        <FunctionContextComponent />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
