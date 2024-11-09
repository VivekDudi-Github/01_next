import {users} from "../route"

export async function GET(request , {params}){
    const {id} = await params ;

    const user = users.find((user) => user.id === parseInt(id)  )
    console.log(user);
    
    return Response.json(user)
}


export async function DELETE(request , {params}){
    const {id} = await params ;

    const index = users.findIndex((user) => user.id === parseInt(id) )
    const newArray = users.splice( index ,)
    
    console.log(newArray);
    
    
}