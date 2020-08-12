import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }
  
  return (
    <form>
      <h3>Login</h3>
      <input type="text" name="username" value={formData.username} onChange={handleChange} />
      <input type="password" name="password" value={formData.password} onChange={handleChange} />

      <Link>Register</Link>
      <button>Submit</button>

    </form>
  )
}