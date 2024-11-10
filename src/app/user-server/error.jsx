"use client"

import { useEffect } from "react"

function error({error}) {
useEffect(()=> {
    console.log(error);
} , [])

return (
    <div className="text-red-600 font-bold">Error While fetching the data</div>
  )
}

export default error