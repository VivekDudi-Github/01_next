"use client"
import {useEffect, useState} from 'react'
 

function userClient() {
const [users , setUsers] = useState([]) ;
const [loading , setLoading] = useState(true) ;
const [error  ,setError] = useState("") ;

useEffect ( () => {

async function fetchUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if(response){
            const data = await response.json()
            
            setUsers(data) ; 
            setLoading(false) ; 
        }
    } 
    catch (error) {
        setError(error) ;
        setLoading(false) ;
    } 
}

fetchUser()
}, [])

if(loading){return <div>Loading.. </div>}
if(error){return <div>Error = {error} </div>}

console.log(users);


return (
    <ol className='p-2 '>
        {users.map(( user , index) => (
            <li key={index} className='bg-white p-2 rounded-sm text-black'>
                {user.name} - {user.email}
            </li>
        ))}
    </ol>
)
}
export default userClient