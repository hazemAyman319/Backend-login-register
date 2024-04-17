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
    </>
  )
}

export default App;
