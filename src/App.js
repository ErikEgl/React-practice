import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import "./index.css";




export default function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)
  function toggle() {
    setIsDarkMode(prevState => !prevState)
  }
    return (
        <div className="container">
            <Navbar darkMode={isDarkMode} toggleDarkMode={toggle}/>
            <Main darkMode={isDarkMode}/>
        </div>
    )
}