// https://www.youtube.com/watch?v=5LrDIWkK_Bc
import FunctionContextComponent from './FunctionContextComponent';
import './App.css';
import React, { useState } from 'react'
export const ThemeContext = React.createContext()
function App() {
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent />
        {/* <ClassContextComponent /> */}
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
