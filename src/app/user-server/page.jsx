
async function userServer() {

    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    

return (
    <ol className='p-2 '>
        {data.map(( user , index) => (
            <li key={index} className='bg-white p-2 rounded-sm text-black'>
                {user.name} - {user.email}
            </li>
        ))}
    </ol>
    )
}

export default userServer