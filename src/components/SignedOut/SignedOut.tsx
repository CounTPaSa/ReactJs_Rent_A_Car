import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const SignedOut = (props: Props) => {
    
    
    return (
        <div>
    <Link to="/login" type="button" className="btn btn-outline-warning">Giris Yap</Link>
    <button type="button" className="btn btn-outline-warning">Kayit Ol</button>
        </div>
      )
}

export default SignedOut