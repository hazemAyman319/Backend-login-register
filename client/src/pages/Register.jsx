import {useState} from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()
  const [data,setData]= useState({
    Name:'',
    Email:'',
    password:'',
  })
  const registerUser = async (e) =>{
    e.preventDefult();
    const{name, email, password} = data
    try {
      const {data} = await axios.post('/register', {
        name, email, password
      })
      if(data.error){
        toast.error(data.error)
      }
      else
      {
        setData({})
        toast.success('Login Successful. Welcome!')
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input type='text' placeholder='Enter Name...' value={data.Name}onChange={(e) => setData({...data, Name: e.target.value})}/>
        <label>Email</label>
        <input type='email' placeholder='Enter Email...' value={data.Email}onChange={(e) => setData({...data, Email: e.target.value})}/>
        <label>Password</label>
        <input type='password' placeholder='Enter Password...' value={data.password}onChange={(e) => setData({...data, password: e.target.value})}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
