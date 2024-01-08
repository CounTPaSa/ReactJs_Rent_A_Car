import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

type Props = {}

const SignedIn = (props: Props) => {
   
    const authContext:any = useContext(AuthContext)
   
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-primary">Bilgilerim</button>
      <button type="button" className="btn btn-warning">
      <a href={"https://github.com/CounTPaSa"} target="_blank" >Bize Ulasin</a>
        </button>
      <Link to="/"type="button" onClick={() =>{authContext.setIsAuthenticated(false)}} className="btn btn-danger">Cikis Yap</Link>
    </div>
      )
}

export default SignedIn