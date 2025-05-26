import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DarkModeToggle from "./DarkModeToggle.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="p-4 bg-white min-h-screen">
        <DarkModeToggle />
       <h1 className="text-2xl">Welcome to Dark App Mode</h1>
       <p>This is an example of implementing dark mode using tailwind css in react projects.</p>
   </div>
  )
}

export default App
