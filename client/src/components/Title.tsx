"use client"
import { useState } from "react"


const Title = () => {
    const [title,setTitle]=useState("")
  return (
    <div className="flex flex-col gap-2 ">
      <input placeholder="enter propmt for thumbanil" className="border p-3 max-w-3xl py-4 rounded-md " value={title} aria-rowspan={3} maxLength={100} onChange={(e)=>setTitle(e.target.value)}/>
      <span className="">{title.length}/100</span>
    </div>
  )
}

export default Title
