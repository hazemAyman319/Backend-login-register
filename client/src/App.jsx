<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
=======
import './App.css'
import { Routes,Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home';
import Registers from './pages/Registers';
import Login from'./pages/Login';
function App() {
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/registers' element={<Registers />}/>
      <Route path='/login' element={<Login />}/>
     </Routes>
>>>>>>> 54df03c3b7ea9e50fa9363cce064cd39ce1cca5e
    </>
  )
}

<<<<<<< HEAD
export default App
=======
export default App;
>>>>>>> 54df03c3b7ea9e50fa9363cce064cd39ce1cca5e
