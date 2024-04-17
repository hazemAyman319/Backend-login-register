import {useState} from 'react'

export default function Login() {
  const [data,setData]= useState({
    Email:'',
    password:'',
  })
const loginUser =(e) =>{
  e.preventDefault()
}

  return (
    <div>
      <form onSubmit={loginUser}>
      <label>Email</label>
        <input type='email'placeholder='Enter Email...'value={data.Email}onChange={(e) => setData({...data, Email: e.target.value})}/>
        <label>Password</label>
        <input type='password'placeholder='Enter Password...'value={data.password}onChange={(e) => setData({...data, password: e.target.value})}/>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
