import {users} from "../route"

export async function GET(request , {params}){
    const {id} = await params ;

    const user = users.find((user) => user.id === parseInt(id)  )
    console.log(user);
    
    return Response.json(user)
}