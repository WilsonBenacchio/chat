import { useState } from 'react'
import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Join />
      <Chat />
    </div>

    
  )
  
}


export default App
