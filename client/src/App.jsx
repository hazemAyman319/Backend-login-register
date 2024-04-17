import './App.css'
import { Routes,Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home';
import Register from './pages/Register';
import Login from'./pages/Login';
function App() {
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
<<<<<<< HEAD
     </Routes>
    </>
  )
}
=======
     </Routes> 
     </>
  )
}

>>>>>>> refs/remotes/origin/main
export default App;
