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
    
    if(index === -1){
        return new Response(JSON.stringify({message : 'User not found'}) , {
            status : 404 , 
            headers :  { "Content-Type": "application/json" }
        })
        
    }
    
    const DeletedArray = users.splice( index , 1)
    
    return new Response(JSON.stringify(DeletedArray[0]) , 
    {
        status : 200 , 
        headers: {
            "Content-Type": "application/json" // Setting response type as JSON
        }
    })
    
}

export async function PATCH( request , {params}){
    const {id} = await params ;

    const data = await request.json() ;

    console.log(id ,data);
    
    const newUserData = { id : id  , name : data.name} ;

    const userIndex = users.findIndex((user) => user.id === parseInt(id))
    const newArray = users.splice(userIndex , 1 , newUserData) ;

    
    return new Response(JSON.stringify(newUserData) , 
    {
        status : 200 , 
        headers: {
            "Content-Type": "application/json" // Setting response type as JSON
        }
    })
    
}