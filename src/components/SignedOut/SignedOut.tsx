import React from 'react'

type Props = {}

const SignedOut = (props: any) => {
  return (
    <div>
<button onClick={props.signIn} type="button" className="btn btn-outline-warning">Giris Yap</button>
<button type="button" className="btn btn-outline-warning">Kayit Ol</button>
    </div>
  )
}

export default SignedOut