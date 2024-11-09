import React from 'react'

async function page  ( { params } ) {
  const paramsGet = await params ;
  const id = paramsGet.id ;
  
  console.log(id);
    return (
    <div>Product : {id}</div>
  )
}

export default page