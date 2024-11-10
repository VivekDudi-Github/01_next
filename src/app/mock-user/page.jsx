import React from 'react'

async function pages() {
    const res = await fetch("https://6730b2a866e42ceaf1611d42.mockapi.io/users")
    const data = await res.json() ;

  return (
    <ol className='p-2 flex flex-wrap w-full'>
        {data.map(( user , index) => (
            <li key={user.id} className='bg-white w-[30%] p-2 m-1  hover:scale-90 duration-200 rounded-sm text-black'>
                {user.id} - {user.name}
            </li>
        ))}
    </ol>
  )
}

export default pages