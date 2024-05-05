
import { NextRequest } from "next/server";
import {samData} from "./data";

export async function GET(request : NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get("query")
    const filteredComments = query ? samData.filter(data => data.last_name.includes(query)) : samData
    return  Response.json(filteredComments);
};


export async function POST(request:Request) {
    const newD = await request.json();
    const newData = {
        id : samData.length + 1,
        email : newD.email,
        first_name : newD.first_name,
        last_name : newD.last_name,
    }
    samData.push(newData)
    return new Response(JSON.stringify(newData),{
        headers : {
            "Content-Type" : "application/json",
        },
        status : 201,
    })
}