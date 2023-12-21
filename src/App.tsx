import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomCheckBox from './\bCustomCheckBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CustomCheckBox />
    </>
  )
}

export default App
