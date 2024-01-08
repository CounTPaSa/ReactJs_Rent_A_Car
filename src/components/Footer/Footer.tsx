import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
   
      <footer className="bg-dark text-white pt-1 pb-2 footer-expand-lg fixed-bottom">
        
        <img  width={100} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8c4b9eca-62bb-4255-896c-9d02bf4d3c9d/dgczpah-ff11fb3f-0734-433c-9fa6-1c3ad2a7e4e3.png/v1/fill/w_1192,h_670/lightning_mcqueen_and_sally_vector__1_by_flyingfoxandbambi_dgczpah-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvOGM0YjllY2EtNjJiYi00MjU1LTg5NmMtOWQwMmJmNGQzYzlkXC9kZ2N6cGFoLWZmMTFmYjNmLTA3MzQtNDMzYy05ZmE2LTFjM2FkMmE3ZTRlMy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.OeXfypH8nchhmL4Q3UO4DSIgwnxwad77_QOIfTi0FqA" alt="" />
       <Link  to={"https://github.com/CounTPaSa"} target="_blank">biz kimiz</Link>
        
        </footer>

    </>
  )
}

export default Footer