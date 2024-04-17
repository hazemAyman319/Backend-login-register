import { useState} from 'react'

export default function Register() {
  const [data,setData]= useState({
    Name:'',
    Email:'',
    password:'',
  })
  const registerUser =(e) =>{
    e.preventDefult()
  }
  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input type='text'placeholder='Enter Name...'value={data.Name}onChange={(e) => setData({...data, Name: e.target.value})}/>
        <label>Email</label>
        <input type='email'placeholder='Enter Email...'value={data.Email}onChange={(e) => setData({...data, Email: e.target.value})}/>
        <label>Password</label>
        <input type='password'placeholder='Enter Password...'value={data.password}onChange={(e) => setData({...data, password: e.target.value})}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
