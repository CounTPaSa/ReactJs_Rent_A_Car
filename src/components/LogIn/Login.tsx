import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router'

type Props = {}

const Login = (props: Props) => {

const authContext:any = useContext(AuthContext)
const navigate:any = useNavigate()

    return (
    <div className="container mt-5 mb-5">
        <div>
        <form>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="button" onClick={() => {
    authContext.setIsAuthenticated(true)
     navigate("/"); 
    }} className="btn btn-primary">Submit</button>
</form>
    </div>
    </div>
  )
}

export default Login