import { revalidatePath } from "next/cache";

async function pages() {
  
    const res = await fetch("https://6730b2a866e42ceaf1611d42.mockapi.io/users")
    const data = await res.json() ;


  const addUser = async (formData) => {
"use server"
    const name = formData.get("name") 
    console.log(name);
    
    const res = await fetch("https://6730b2a866e42ceaf1611d42.mockapi.io/users" , 
      {
        method : "POST" , 
        headers : {
          "Content-Type" : "Application/json"
        } , 
        body : JSON.stringify({name}) ,
      }
    ) ; 
    const newUser = await res.json() ; 
    revalidatePath("/mock-user")
    console.log(newUser);

  }

  return (
    <div>
      <div className='py-10'>
        <form action={addUser} className=''>
          <input  type='text' name='name' required className='border p-2 ml-5 mx-2 text-black' />
          <button type='submit' className='bg-blue-500 px-4 py-2 rounded'>
            Add User
          </button>
        </form>
      </div>
        <ol className='p-2 flex flex-wrap w-full'>
            {data.map(( user , index) => (
                <li key={user.id} className='bg-white w-[30%] p-2 m-1  hover:scale-90 duration-200 rounded-sm text-black'>
                    {user.id} - {user.name}
                </li>
            ))}
        </ol>
    </div>
  )
}

export default pages