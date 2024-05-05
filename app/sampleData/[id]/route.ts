import {redirect} from "next/navigation";
import {samData} from "../data";

export async function GET(_request : Request,{params} : {
    params :{
        id: string
    }
}) {
    if(parseInt(params.id) > samData.length){
        redirect("/sampleData")
    }
    const DData =  samData.find(data => data.id === parseInt(params.id));
    return Response.json(DData);
}

export async function PATCH(
    request : Request,
    {params}:{params :{id:string}}
) {

    const body = await request.json()
    const { email } = body
    const index  = samData.findIndex((data) => data.id === parseInt(params.id))
    samData[index].email = email;
    return Response.json(samData[index])

}

export  async function DELETE( 
    request : Request,
    {params}:{params :{id:string}}) 
{
    
    const index = samData.findIndex(data=> data.id === parseInt(params.id))
    const deleteEmail = samData[index];
    samData.splice(index,1);
    return Response.json(deleteEmail);
}