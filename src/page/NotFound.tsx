import React from 'react'

import NotFoundBlock from "../NotFoundBlock/index"
import { useNavigate } from 'react-router'


export default function NotFound() {
  const navigate = useNavigate()
  React.useEffect(()=>{
    setTimeout(()=>{
      navigate("/")
    },200)
  })
  return (
    <div><NotFoundBlock/></div>
  )
}
