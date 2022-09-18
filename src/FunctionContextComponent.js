import React, { useContext } from 'react'
import { ThemeContext } from './App'

export default function FunctionContextComponent() {

  const {darkTheme, redTheme} = useContext(ThemeContext)
  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? 'beige' : '#333',
    padding: '2rem',
    margin: '2rem',
  }
  const themeId = {
    color: redTheme ? 'red' : 'gold',
  }

  return (
    <div style={themeStyles} 
    id={JSON.stringify(themeId)}>
      Hello World
    </div>
  )
}

// https://progressivewebninja.com/how-to-pass-multiple-values-in-react-context/