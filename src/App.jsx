import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick1 = () => {
    setCount(count + 1)
  }
  const handleClick2 = () => {
    setCount(count - 1)
  }
  return (
    <>
      <div>
        <h1>Counter is {count} </h1>
        <p> Number is {count % 2 ===0 ? 'even' : 'odd'} </p>
        <button onClick={handleClick1}> Increment </button>
        <button onClick={handleClick2}> Decrement </button>
      </div>
    </>
  )
}

export default App
