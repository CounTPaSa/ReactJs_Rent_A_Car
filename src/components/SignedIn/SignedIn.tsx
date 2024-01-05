import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const SignedIn = (props: any) => {
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
  <button type="button" className="btn btn-primary">Bilgilerim</button>
  <button type="button" className="btn btn-warning">
  <a href={"https://github.com/CounTPaSa"} target="_blank" >Bize Ulasin</a>
    </button>
  <button onClick={props.signOut} type="button" className="btn btn-danger">Cikis Yap</button>
</div>
  )
}

export default SignedIn